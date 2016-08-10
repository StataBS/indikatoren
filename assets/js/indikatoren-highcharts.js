
//load global options, template, chartOptions from external scripts, load csv data from external file, and render chart to designated div
function renderChart(globalOptionsUrl, templateUrl, chartUrl, csvUrl, chartId){   
  //load scripts one after the other, then load csv and draw the chart
  $.when(        
      /*
      $.getScript('charts/options001.js'),
      $.getScript('charts/template001.js'),
      $.getScript('charts/I.01.2.0002.js'),
      */
      $.getScript(globalOptionsUrl),
      $.getScript(templateUrl),
      $.getScript(chartUrl),
      $.Deferred(function( deferred ){
          $(deferred.resolve);
      })
  ).done(function(){
      //load csv and draw chart      
      $.get(csvUrl, function(data){
        drawChart(data, chartOptions[chartId])
      });
  });
  
  
  //parse csv and configure HighCharts object
  function parseData(completeHandler, chartOptions, data) {
      try {
        var dataOptions = {
            csv: data
        };
        dataOptions.sort = true
        dataOptions.complete = completeHandler;
        Highcharts.data(dataOptions, chartOptions);
      } catch (error) {
        console.log(error);
        completeHandler(undefined);
      }      
  };


  //merge series with all options and draw chart
  var drawChart = function(data, chartOptions){            
      parseData(function (dataOptions) {
        // Merge series configs
        if (chartOptions.series && dataOptions) {
            Highcharts.each(chartOptions.series, function (series, i) {
              chartOptions.series[i] = Highcharts.merge(series, dataOptions.series[i]);
            });
        }
        var options = Highcharts.merge(dataOptions, chartOptions, template);
        var chart = new Highcharts['Chart'](options);
      }, chartOptions, data);      
  };          
};


//construct urls by chart kuerzel and render to designated div
function renderChartByKuerzel(kuerzel){
  var container = $(escapeCssChars('#container-'+kuerzel));
  //check if a highcharts-container below the container is already present. 
  //no highcharts container yet: load data and draw chart. 
  if (!container.find('div.highcharts-container').length) {  
    //console.log('chart does not exist yet. loading data for '+kuerzel);
    var chartUrl = 'charts/' + kuerzel + '.js';
    var csvUrl = 'data/' + kuerzel + '.csv';    
    //get template for requested chart
    
    var chart = indikatoren.filter(function(item, i, ar){
      if (item.kuerzel === kuerzel) { 
        return item.template;
      } 
    })[0];    
    var templateUrl = 'charts/' + chart.template + '.js';
        
    renderChart('charts/options001.js', templateUrl, chartUrl, csvUrl, kuerzel);
  }
  //highcharts container exists already: redraw chart without reloading data from network
  else {
    //console.log('already drawn, redrawing without reloading data for ' +  kuerzel);    
    //find chart in highchart's array of charts
    var chartIndex = container.attr("data-highcharts-chart");
    //get chartOptions, destroy and recreate
    var currentChartOptions = Highcharts.charts[chartIndex].options;
    //destroy and redraw in order to get nice animation
    Highcharts.charts[chartIndex].destroy();
    container.highcharts(currentChartOptions);
  };
}

//dom ids may contain . or :, if used in jquery these must be escaped. http://learn.jquery.com/using-jquery-core/faq/how-do-i-select-an-element-by-an-id-that-has-characters-used-in-css-notation/
function escapeCssChars(myid) {
    return myid.replace( /(:|\.|\[|\]|,)/g, "\\$1" );
}


