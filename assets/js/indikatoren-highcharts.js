
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


//load global options, template, chartOptions from external scripts and render chart to designated div
function renderChart(globalOptions, template, chart, csv, chartId){   
    $.when(        
        /*
        $.getScript('charts/options001.js'),
        $.getScript('charts/template001.js'),
        $.getScript('charts/I.01.2.0002.js'),
        */
        $.getScript(globalOptions),
        $.getScript(template),
        $.getScript(chart),
        $.Deferred(function( deferred ){
            $(deferred.resolve);
        })
    ).done(function(){
        //load csv and draw chart      
        $.get(csv, function(data){
        drawChart(data, chartOptions[chartId])
        });
    });
};