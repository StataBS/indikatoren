(function(){
    return {
      yAxis: {
        tickInterval: 25,
      },
      xAxis: {
        type: "category", 
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
              	return this.value + ' (' + nString + sum + ')';      
          },
        },
      },
      chart: {
        spacingTop: 5, 
        inverted: true,
      },
      "series": [
        { "color": "#007a2f", index: 5, legendIndex: 5}, // dunkelgrün
        { "color": "#68ab2b", index: 4, legendIndex: 4}, // grün
        { "color": "#ffbb58", index: 3, legendIndex: 3}, // orange
        { "color": "#dc440e", index: 2, legendIndex: 2}, // rot
        { "color": "#999999", index: 1, legendIndex: 1}, // grau
        { "color": "#474747", index: 0, legendIndex: 0}, // grau
      ],
      legend: {
        x: -1,
        layout: 'horizontal',
        align: 'left',
        verticalAlign: 'top',
        reversed: true,
        labelFormatter: function () {
          console.log(this.name);
            return this.name;
        },
        itemWidth: 118,
        itemStyle: {
          textOverflow: 'none',
          whiteSpace: 'nowrap',
        },
      },
	};
}());
