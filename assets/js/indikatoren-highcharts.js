
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
  var chartUrl = 'charts/' + kuerzel + '.js';
  var csvUrl = 'data/' + kuerzel + '.csv';
  renderChart('charts/options001.js', 'charts/template001.js', chartUrl, csvUrl, kuerzel);
}