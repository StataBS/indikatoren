(function(){
    return {
    "series": [
        {"color": "#256370", index: 3, legendIndex: 3}, // 
        {"color": "#71A3B5", index: 2, legendIndex: 2}, // 
        {"color": "#FFBB58", index: 1, legendIndex: 1}, // 
        {"color": "#8A8A8A", index: 0, legendIndex: 0}, //
],
  "xAxis": {
      "type": "category",
      labels: {
        "formatter": function() {
                //add sum of observations of visible series to the axis label
                var allVisibleSeries = this.chart.series.filter(function(val, i, arr){
                    return val.visible;
                });
                var indexOfCurrentValue = this.axis.names.indexOf(this.value);
                var sum = allVisibleSeries.reduce(function(accumulator, series, index, arr){
                    return accumulator + series.yData[indexOfCurrentValue];
                }, 0);
                //use N if all series are visible, otherwise use n
                var nString = (this.chart.series.length == allVisibleSeries.length) ? 'N=' : 'n='; 
                var formattedSum = Highcharts.numberFormat(sum, 0, ",", " ")
            	return this.value + " (" + nString + sum + ")";      
        },
      },
  },
  yAxis: {
    tickInterval: 25,
  },
  legend: {
      reversed: true, 
      alignColumns: false,
      itemWidth: 77,
      layout: 'horizontal',
      align: 'left',
      verticalAlign: 'top',
      labelFormatter: function () {
        return this.name;
      },
      itemStyle: {
        textOverflow: undefined,
        whiteSpace: 'nowrap',
      }

  },
  chart: {
      spacingTop: 5,
      inverted: true,
  }
};
}());

 