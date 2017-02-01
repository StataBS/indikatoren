/*
global $

global Highcharts

global indikatoren
global templatesById
*/

"use strict"; 

//parse csv and configure HighCharts object
function parseData(chartOptions, data, completeHandler) {
    try {
      var dataOptions = Highcharts.merge(chartOptions.data, {
          csv: data
      });
      
      //delete data node in chartOptions after merging into dataOptions
      delete chartOptions.data;
 
      //dataOptions.sort = true;
      dataOptions.complete = completeHandler;
      Highcharts.data(dataOptions, chartOptions);
    } 
    catch (error) {
      console.log(error);
      completeHandler(undefined);
    }      
}

//merge series with all options
function createChartConfig(data, chartOptions, template, chartMetaData, indikatorensetView, suppressNumberInTitle, callbackFn){  
  parseData(chartOptions, data, function (dataOptions) {
    // Merge series configs
    if (chartOptions.series && dataOptions) {
        Highcharts.each(chartOptions.series, function (series, i) {
          chartOptions.series[i] = Highcharts.merge(series, dataOptions.series[i]);
        });
    }
    //merge all highcharts configs
    var options = Highcharts.merge(true, dataOptions, template, chartOptions);
    //inject metadata to highcharts options 
    var injectedOptions = injectMetadataToChartConfig(options, chartMetaData, indikatorensetView, suppressNumberInTitle);
    //replace . in labels with spaces - necessary for space between column groups
    var replacedOptions = createEmptyLabels(injectedOptions);
    //add afterSeries as last series
    var afterSeriesOptions = replacedOptions;     
    if (afterSeriesOptions.afterSeries) {afterSeriesOptions.series = replacedOptions.series.concat(replacedOptions.afterSeries)} 
    delete afterSeriesOptions.afterSeries;

    callbackFn(afterSeriesOptions);
  });        
}



//merge series with all options and draw chart
function drawChart(data, chartOptions, template, chartMetaData, indikatorensetView, suppressNumberInTitle, callbackFn){
  createChartConfig(data, chartOptions, template, chartMetaData, indikatorensetView, suppressNumberInTitle, function(options){
    var chartType = (options.chart.type === "map") ? 'Map' : 'Chart';
    var chart = new Highcharts[chartType](options, callbackFn);
    return chart;
  });
}


//Add data from database to chart config
function injectMetadataToChartConfig(options, data, indikatorensetView, suppressNumberInTitle){
  var chartNumber = (indikatorensetView) ? data.kuerzelKunde : data.kuerzel;
  var chartNumberToDisplay = (suppressNumberInTitle) ? "" : chartNumber + ' ';
  options['title']['text'] = (indikatorensetView) ? chartNumberToDisplay + data.title : chartNumberToDisplay + data.title;
  options['subtitle']['text'] = data.subtitle;    
  options['chart']['renderTo'] = 'container-' + data.id;
  options['credits']['text'] = 'Quelle: ' + data.quellenangabe.join(';<br/>');
  //add 10 px space for each line of credits plus -5px for the first line (if not stated otherwise)
  options['credits']['position']['y'] = (options['credits']['position']['y'] || -5) + (-10 * data.quellenangabe.length);
  //make sure node exists before deferencing it
  options['exporting'] = (options['exporting'] || {});
  options['exporting']['filename'] = data.kuerzel;
  return options;
}


//get empty labels: replace series data names that only contain dots (.) with spaces
function createEmptyLabels(options){
  var newOptions = options;
  newOptions.series.forEach(function(serie){
    serie.data.forEach(function(dataItem){
      var re = /^[.]+$/; 
      //test if string contains only dots (.), see http://stackoverflow.com/questions/18358480/regular-expression-to-check-contains-only
      if (re.test(dataItem[0])){
        //perform global replace of . with /g, see http://www.w3schools.com/jsref/jsref_replace.asp
        dataItem[0] = dataItem[0].replace(/./g, ' ');
      }
    });
  });
  return newOptions;
}


//todo: create new function that uses the pre-created chart configs from /charts/configs
//load global options, template, chartOptions from external scripts, load csv data from external file, and render chart to designated div
function renderChart(globalOptionsUrl, templateUrl, chartUrl, csvUrl, chartMetaData, indikatorensetView, suppressNumberInTitle, callbackFn){
  //load scripts one after the other, then load csv and draw the chart
  $.when(    
      $.getScript(globalOptionsUrl),
      $.getScript(templateUrl),
      $.getScript(chartUrl),
      $.Deferred(function( deferred ){
        $(deferred.resolve);
      })
  ).done(function(optionsReturnData, templateReturnData, chartReturnData){
      //get returned script, evaluate it, save returned object to variable. 
      var globalOptions = eval(optionsReturnData[0]);
      var chartOptions = eval(chartReturnData[0]);
      var template = eval(templateReturnData[0]);
      
      //load csv and draw chart            
      $.get(csvUrl, function(data){
        drawChart(data, chartOptions, template, chartMetaData, indikatorensetView, suppressNumberInTitle, callbackFn);
      });
    }
  ).fail(function(jqXHR, textStatus, errorThrown){
    console.log('$.getScript() failed! ');
    console.log(textStatus);
    console.log(errorThrown);
  });  
}


//find chart metadata by kuerzel from json database 
function findChartByKuerzel(data, kuerzel){
  var matchingChart;
  for (var i = 0; i < data.length; i++){
    if (data[i].kuerzel == kuerzel){
      matchingChart = data[i];
      break;
    }     
  }
  return matchingChart;
}

function findChartById(data, id){
  var matchingChart;
  for (var i = 0; i < data.length; i++){
    if (data[i].id == id){
      matchingChart = data[i];
      break;
    }     
  }
  return matchingChart;
}


function findKuerzelById(data, id){
  for (var i=0; i<data.length; i++) {
    if (data[i].id == id){
      return data[i].kuerzel;
    }    
  }
}

function findIdByKuerzel(data, kuerzel){
  for (var i=0; i<data.length; i++) {
    if (data[i].kuerzel == kuerzel){
      return data[i].id;
    }    
  }
}

function getChartUrls(id){
  var chartUrl = 'charts/templates/' + id + '.js';
  var csvUrl = 'data/' + id + '.tsv';
  var templateUrl = 'charts/templates/' + templatesById[id] + '.js';
  return {
    "chartUrl": chartUrl, 
    "csvUrl": csvUrl,
    "templateUrl": templateUrl, 
    "optionsUrl": 'charts/templates/options001.js'
  };
}

//construct urls by chart id and render to designated div
function lazyRenderChartById(id, chartMetaData, indikatorensetView, suppressNumberInTitle, callbackFn){
  var container = $(escapeCssChars('#container-' + id));
  //check if a highcharts-container below the container is already present. 
  //no highcharts container yet: load data and draw chart. 
  if (!container.find('div.highcharts-container').length) {     
    var chartUrls = getChartUrls(id);
    //get template for requested chart 
    (chartMetaData === undefined) ? chartMetaData = findChartById(indikatoren, id) : chartMetaData;
    renderChart(chartUrls['optionsUrl'], chartUrls['templateUrl'], chartUrls['chartUrl'], chartUrls['csvUrl'], chartMetaData, indikatorensetView, suppressNumberInTitle, callbackFn);
  }
  //highcharts container exists already: redraw chart without reloading data from network
  else { 
    //find chart in highchart's array of charts
    var chartIndex = container.attr("data-highcharts-chart");
    //get chartOptions, destroy and recreate
    var currentChartOptions = Highcharts.charts[chartIndex].options;
    //destroy and redraw in order to get nice animation
    Highcharts.charts[chartIndex].destroy();
    container.highcharts(currentChartOptions, callbackFn);
  }
}


//dom ids may contain . or :, if used in jquery these must be escaped. http://learn.jquery.com/using-jquery-core/faq/how-do-i-select-an-element-by-an-id-that-has-characters-used-in-css-notation/
function escapeCssChars(myid) {
    return myid.replace( /(:|\.|\[|\]|,)/g, "\\$1" );
}


//create chart as image
function exportThumbnail(id, exportType, offline){    
  var chart = $(escapeCssChars('#container-' + id)).highcharts();
  //remove callback - otherwise end up in infinite loop
  delete chart.callback;
  //scale chart in order to receive 150px width
  chart.options.exporting.scale = 0.31;
  if (offline){     
    chart.exportChartLocal({
      type: exportType, 
      filename: id
    });  
  }
  else {
    chart.exportChart({
      type: exportType, 
      filename: id
    });      
  }
}

