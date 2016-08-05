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
