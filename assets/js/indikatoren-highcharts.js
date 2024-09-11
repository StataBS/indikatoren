/*
global $
global dataLayer
global Highcharts
global indikatoren
global templatesById
*/

"use strict"; 

//parse csv and configure HighCharts object
function parseData(chartOptions, data, completeHandler) {
    try {
      //create data options, guess delimiter
      var dataOptions = Highcharts.merge(chartOptions.data, {
          csv: data,
          itemDelimiter: (data.indexOf('\t') !== -1 ? '\t' : ',')
      });
      
      //delete data node in chartOptions after merging into dataOptions
      delete chartOptions.data;
 
      //dataOptions.sort = true;
      dataOptions.complete = completeHandler;
      Highcharts.data(dataOptions, chartOptions);
    } 
    catch (error) {
      completeHandler(undefined);
    }      
}

//merge series with all options
function createChartConfig(data, chartOptions, template, chartMetaData, view, suppressNumberInTitle, callbackFn){  
  //add custom filter to chart options if present in metadata
  if (chartMetaData["filter"]){
    //ensure customFunctions is in template
    if (!("customFunctions" in chartOptions)) { 
      chartOptions["customFunctions"] = {};
    } 
    chartOptions["customFunctions"]["filter"] = chartMetaData["filter"];
    chartOptions["customFunctions"]["data-id"] = chartMetaData["data-id"];
  }  

  parseData(chartOptions, data, function (dataOptions) {
    // Merge series configs
    if (chartOptions.series && dataOptions) {
        chartOptions.series.forEach(function (series, i) {
          chartOptions.series[i] = Highcharts.merge(series, dataOptions.series[i]);
        });
    }
    //merge all highcharts configs
    var options = Highcharts.merge(true, dataOptions, template, chartOptions);
    //inject metadata to highcharts options 
    var injectedOptions = injectMetadataToChartConfig(options, chartMetaData, view, suppressNumberInTitle);
    //replace . in labels with spaces - necessary for space between column groups
    var replacedOptions = createEmptyLabels(injectedOptions);
    //add beforeSeries as last series
    var beforeSeriesOptions = replacedOptions;     
    if (beforeSeriesOptions.beforeSeries) {beforeSeriesOptions.series = replacedOptions.beforeSeries.concat(replacedOptions.series)} 
    delete beforeSeriesOptions.beforeSeries;

    //add afterSeries as last series
    var afterSeriesOptions = beforeSeriesOptions;     
    if (afterSeriesOptions.afterSeries) {afterSeriesOptions.series = beforeSeriesOptions.series.concat(beforeSeriesOptions.afterSeries)} 
    delete afterSeriesOptions.afterSeries;

    callbackFn(afterSeriesOptions);
  });        
}



//merge series with all options and draw chart
function drawChartFromData(data, chartOptions, template, chartMetaData, view, suppressNumberInTitle, callbackFn){
  createChartConfig(data, chartOptions, template, chartMetaData, view, suppressNumberInTitle, function(options){
    //decide if stockchart, map, or chart
    var constr = options.isStock ? 'StockChart': (options.chart.type === 'map' ? 'Map' : 'Chart');
    return new Highcharts[constr](options, callbackFn);
  });
}


//determine if the view is indikatorensetView (true or false), for backwards compatibility
function isIndikatorensetView(view){
  return ((view == true || view == "indikatorenset") ? true :  false);
}



function drawChartFromJson(id, indikatorensetView, chartMetaData, suppressNumberInTitle, callbackFn){
  loadChartConfig(id, indikatorensetView,  function(options){
    //decide if stockchart, map, or chart
    var constr = options.isStock ? 'StockChart': (options.chart.type === 'map' ? 'Map' : 'Chart');
    var injectedOptions = injectMetadataToChartConfig(options, chartMetaData, indikatorensetView, suppressNumberInTitle);
    return new Highcharts[constr](injectedOptions, callbackFn);
  });
}


function loadChartConfig(id, indikatorensetView, callbackFn){
  var chartOptionsUrl = "charts/configs/portal/" + id + ".json";
  var jqxhr = $.get(chartOptionsUrl, function() {}, null, "text")
    .done(function(data) {
      var chartOptions = deserialize(data);
      callbackFn(chartOptions);    
    })
    .fail(function(e) {
      console.log( "error"  + e);
    });
}



//Add data from database to chart config
function injectMetadataToChartConfig(options, data, view, suppressNumberInTitle){
  var chartNumber = (isIndikatorensetView(view)) ? data.kuerzelKunde : data.kuerzel;
  var chartNumberToDisplay = (suppressNumberInTitle == true || suppressNumberInTitle == null) ? "" : chartNumber + ': ';
  options['title']['text'] = (isIndikatorensetView(view)) ? chartNumberToDisplay + data.title : data.title;
  options['subtitle']['text'] = data.subtitle;    
  options['chart']['renderTo'] = 'container-' + data.id;
  options['credits']['text'] = 'Quelle: ' + data.quellenangabe.join(';<br/>') + '.';
  //add 10 px space for each line of credits plus -5px for the first line (if not stated otherwise)
  var numberOfCreditsLines = data.quellenangabe.length;
  var aktDatum = Date.parse(data["aktualisierungsdatum"]);
  //if valid aktualisierungsdatum: construct last entry in credits
  if (view != 'print' && isNaN(aktDatum) == false)
  {
    var aktDatumText = 'Zuletzt geändert: ' + (new Date(aktDatum)).toLocaleDateString('de-CH');
    numberOfCreditsLines += 1;
    options['credits']['text'] += ("<br/>" + aktDatumText);
    //add 13 pixels to chart height to make space
    options['chart']['height'] = parseInt(options['chart']['height'], 10) + 13;
  }
  
  options['credits']['position']['y'] = (options['credits']['position']['y'] || -5) + (-10 * numberOfCreditsLines);
  //increase spacingBottom to prevent overlapping xAxis.label with credits if credits are to be shown
  if (view != 'print'){
  	options['chart']['spacingBottom'] = (options['chart']['spacingBottom'] || options['chart']['spacing'][2] || 0) + ((numberOfCreditsLines-1) * 10);
  }

  //make sure node exists before deferencing it
  options['exporting'] = (options['exporting'] || {});
  options['exporting']['filename'] = data.id.toString();
  
  //for print, remove, title, subtitle, and credits, and set the scale
  if (view == "print"){
    options.title.text = null;
    options.title.margin = 0;
    delete options.subtitle;
    options.credits.text = ' ';
    //options.exporting.scale = 4;
  }
  //changes for charts from Umweltbericht
  if (data.kennzahlenset == "Umwelt"){
    //options['chart']["width"] =  485;
    //options['chart']["height"] = 415;
    delete options.exporting.buttons;
  }
  return options;
}


//get empty labels: replace series data names that only contain dots (.) with spaces
function createEmptyLabels(options){
  var newOptions = options;
  newOptions.series.forEach(function(serie){
    //check if serie contains data node
    if (serie.data){
      serie.data.forEach(function(dataItem){
        var re = /^[.]+$/; 
        //test if string contains only dots (.), see http://stackoverflow.com/questions/18358480/regular-expression-to-check-contains-only
        if (re.test(dataItem[0])){
          //perform global replace of . with /g, see http://www.w3schools.com/jsref/jsref_replace.asp
          dataItem[0] = dataItem[0].replace(/./g, ' ');
        }
      });
    }
  });
  return newOptions;
}


//todo: create new function that uses the pre-created chart configs from /charts/configs
//load global options, template, chartOptions from external scripts, load csv data from external file, and render chart to designated div
function renderChart(globalOptionsUrl, templateUrl, chartUrl, csvUrl, chartMetaData, indikatorensetView, suppressNumberInTitle, callbackFn){
  //Umwelt data are rendered directly from json, not from csv + json files
  if (chartMetaData.datenInChartIntegriert == false || (chartMetaData.datenInChartIntegriert === undefined && chartMetaData.kennzahlenset != "Umwelt")){
    //load scripts one after the other, then load csv and draw the chart
    $.when(    
        //$.getScript(globalOptionsUrl),
        $.getScript(templateUrl),
        $.getScript(chartUrl),
        $.Deferred(function( deferred ){
          $(deferred.resolve);
        })
    ).done(function(/*optionsReturnData, */templateReturnData, chartReturnData){
        //get returned script, evaluate it, save returned object to variable. 
        //var globalOptions = eval(optionsReturnData[0]);
        var chartOptions = eval(chartReturnData[0]);
        var template = eval(templateReturnData[0]);
        
        //load csv and draw chart            
        $.get(csvUrl, function(data){
          //remove quotes from data
          var dataWithoutQuotes = data.replace(/"/g, "");
          drawChartFromData(dataWithoutQuotes, chartOptions, template, chartMetaData, indikatorensetView, suppressNumberInTitle, callbackFn);
        });
      }
    ).fail(function(jqXHR, textStatus, errorThrown){
      console.log('$.getScript() failed! ');
      console.log(textStatus);
      console.log(errorThrown);
    });  
  }
  else{
    drawChartFromJson(chartMetaData.id, indikatorensetView, chartMetaData, suppressNumberInTitle, callbackFn);
  }
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


function getChartUrls(id, chartMetaData){
  var chartUrl = 'charts/templates/' + (chartMetaData["chart-id"] || id) + '.js';
  var csvUrl = 'data/' + (chartMetaData["data-id"] || id) + '.tsv';
  var templateUrl = 'charts/templates/' + templatesById[id] + '.js';
  return {
    "chartUrl": chartUrl, 
    "csvUrl": csvUrl,
    "templateUrl": templateUrl, 
    "optionsUrl": 'charts/templates/options001.js'
  };
}

//construct urls by chart id and render to designated div
function lazyRenderChartById(id, chartMetaData, view, suppressNumberInTitle, callbackFn){
  //fire GTM event
  dataLayer.push({'event': 'LazyRenderChart', 'chartId': id, 'view': view});

  //get template for requested chart 
  (chartMetaData === undefined) ? chartMetaData = findChartById(indikatoren, id) : chartMetaData;
  
  var container = $(escapeCssChars('#container-' + id));
  var chartUrls = getChartUrls(id, chartMetaData);
  
  //highcharts container exists already: delete chart 
  if (container.find('div.highcharts-container').length) {     
    //find chart in highchart's array of charts
    var chartIndex = container.attr("data-highcharts-chart");
    //destroy and redraw in order to get nice animation. Lazy loading no longer performed, because of problems with mappie tooltips starting with Highcharts 6.1.1. 
    Highcharts.charts[chartIndex].destroy();
  }
  renderChart(chartUrls['optionsUrl'], chartUrls['templateUrl'], chartUrls['chartUrl'], chartUrls['csvUrl'], chartMetaData, view, suppressNumberInTitle, callbackFn);
}


//dom ids may contain . or :, if used in jquery these must be escaped. http://learn.jquery.com/using-jquery-core/faq/how-do-i-select-an-element-by-an-id-that-has-characters-used-in-css-notation/
function escapeCssChars(myid) {
    return myid.replace( /(:|\.|\[|\]|,)/g, "\\$1" );
}


//from https://github.com/yahoo/serialize-javascript
function deserialize(serializedJavascript){
  return eval('(' + serializedJavascript + ')');
}


//create chart as image
function exportThumbnail(id, exportType, offline, exportServer, filename){
  //define default filename
  filename = filename || id;
  filename = filename.toString();
  var chart = $(escapeCssChars('#container-' + id)).highcharts();
  console.log(chart);
  //remove callback - otherwise end up in infinite loop
  delete chart.callback;
  //change scale and background color for png
  if (exportType == 'image/png') {
    chart.options.exporting.scale = 15;
    chart.options.chart.borderColor = '#ffffff';
    chart.options.chart.backgroundColor = '#ffffff';
  }
  //set exportServer
  if (exportServer) {
    chart.options.exporting.url =  exportServer;
    chart.options.filename = filename;
  }
  
  if (offline){     
    chart.exportChartLocal({
      type: exportType, 
      filename: filename
    });  
  }
  else {
    chart.exportChart({
      type: exportType, 
      filename: filename
    });      
  }
}


//render the html required for links to other chart, kennzahlenset or external resources
function renderLinksHTML(kennzahlenset, renderLink, externalLinks, view, stufe1, renderLinkDisplayMode, hideLinks, hideLinksTitle){
  var returnText = "";
  var displayLinkToIndikatorenset = kennzahlenset;
  //renderLink: Link to different view of same data
  var displayRenderLink = (renderLink && renderLink.length && renderLink[0].length);
  var displayExternalLinks = (externalLinks && externalLinks.length && externalLinks[0].length);
  //any of the links need to be present 
  if (displayLinkToIndikatorenset || displayRenderLink || displayExternalLinks ) {
    returnText = " \
        <div id='links'" + (hideLinks ? "class='hidden'" : '')  + "> \
          <div><h1 id='linksTitle' " + (hideLinksTitle ? "class='hidden'" : '') + ">Links</h1></div> \
          <div class='lesehilfe'> \
            <ul class='list-unstyled'>\
        ";
    //Only display Link to Indikatorenset if not already in Indikatorenset View
    if (displayLinkToIndikatorenset) {
      returnText += "<li><img src='assets/img/icon-link.png' class='link-icon'/>Indikatorenset: <a href='http://www.statistik.bs.ch/indikatorenset/"+ kennzahlenset.toLowerCase().replace(" ", "-") + "' target='_blank'>" + kennzahlenset.replace('-', ' ') + "</a>";
      //in indikatorenset View, add the stufe1 text here
      if(isIndikatorensetView(view) && stufe1){
        //returnText += ", " + stufe1;
      }
      //if do not add a dot at the ned if there's already one present
      var lastChar = returnText[returnText.length-1];
      if (lastChar != '.') {
        returnText += '.';
      }
      returnText += "</li>";      
    }
    if (displayRenderLink) {
      if (renderLinkDisplayMode == 'slide' || renderLinkDisplayMode === undefined){
        //we're in carousel mode, slide to other chart
        returnText += "<li><img src='assets/img/icon-link.png' class='link-icon'/><a href='javascript:javascript:slideToLinkedChart(" + renderLink[0] + ", window.FJS, " + isIndikatorensetView(view) + ")'>Andere Darstellungsform</a> dieser Daten.</li>";
      }
      else{
        //we're in chart-detail.html, open link to other chart
        returnText += "<li><img src='assets/img/icon-link.png' class='link-icon'/><a href='chart-details.html?id=" + renderLink[0] + "'>Andere Darstellungsform</a> dieser Daten.</li>";
      }
    }
    if (displayExternalLinks) {
      externalLinks.forEach(function(v, i, arr){
        returnText += "<li><img src='assets/img/icon-link.png' class='link-icon'/>" + v + "</li>";
      });
    }
    returnText += " \
            </ul> \
          </div> \
        </div> \
        ";
  }
  return returnText;
}