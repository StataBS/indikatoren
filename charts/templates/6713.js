(function () {
  return {
    chart: {
      width: 665,
    },
    yAxis: {
      tickInterval: 20,
    },
    xAxis: {
      type: "category",
      //reversed: true,
      labels: {
        rotation: -45,
        formatter: function () {
          //add sum of observations of visible series to the axis label
          var allVisibleSeries = this.chart.series.filter(function (val, i, arr) {
            return val.visible;
          });
          var indexOfCurrentValue = this.axis.names.indexOf(this.value);
          var sum = allVisibleSeries.reduce(function (accumulator, series, index, arr) {
            return accumulator + series.yData[indexOfCurrentValue];
          }, 0);
          //use N if all series are visible, otherwise use n
          //var nString = /*(this.chart.series.length == allVisibleSeries.length) ? 'N=' : */ 'n=';

          //delete everything before ":", including ":"
          this.value = this.value.replace(/[^:]*:/, "");
          var nString = (this.value.match(/Total/)) ? 'N=' : 'n=';

          //check for value that contains only spaces
          if (sum != 0) return (this.value.replace(/\s/g, "") == "") ? this.value : this.value + ' (' + nString + sum + ')';
          //else, if sum = 0, then it is assumed to be an intermediate title. return it bold
          return "<b>" + this.value + "</b>";
        }
      },
    },
    legend: {
      verticalAlign: "top",
      y:6,
      reversed: true,
    },
    series: [
      { color: "#007a2f", index: 5, legendIndex: 0 }, // dunkelgrün
      { color: "#68ab2b", index: 4, legendIndex: 1 }, // grün
      { color: "#ffbb58", index: 3, legendIndex: 2 }, // orange
      { color: "#dc440e", index: 2, legendIndex: 3 }, // rot
      { color: "#C8C8C8", index: 1, legendIndex: 4 }, // grau
      { color: "#6F6F6F", index: 0, legendIndex: 5 }, // grau
    ]
  };
}());