(function(){
    return {
      plotOptions: {
        series: {
          pointPadding: 0.2,
          borderWidth: 0,
        }
      },
  "xAxis": {
    "type": "category", 
    /*labels: {
      formatter: function() {
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
          var formattedSum = "" + Highcharts.numberFormat(sum, 0, ",", " ");
      	  return this.value + ' (' + nString + sum + ')';
        }, 
    },*/
  },
  yAxis: {
    tickInterval: 25,
  },  
  "series": [
    { "color": "#007a2f", index: 5, legendIndex: 5}, // dunkelgrün
    { "color": "#68ab2b", index: 4, legendIndex: 4}, // grün
    { "color": "#ffbb58", index: 3, legendIndex: 3}, // orange
    { "color": "#dc440e", index: 2, legendIndex: 2}, // rot
    { "color": "#C8C8C8", index: 1, legendIndex: 1}, // grau
    { "color": "#6F6F6F", index: 0, legendIndex: 0}, // grau
  ],
	chart: {
	  inverted: true,
	},
  legend: {
    layout: 'horizontal',  
    align: 'left',
    verticalAlign: 'top',
    itemDistance: 10,
    itemWidth: 100,
    reversed: true,
    labelFormatter: function () {
      return this.name;
    },
    itemStyle: {
      whiteSpace: 'nowrap',
      textOverflow: null,
    },
  }
	};
}());
