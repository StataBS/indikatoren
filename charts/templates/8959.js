(function () {
  return {
    chart: {
      inverted: false,
      width: 665,
    },
    series: [
      { "color": "#246370" }, // dunkelgrün
      { "color": "#A8C3CA" }, // grün
      { "color": "#FFBB58" }, // orange
      { "color": "#DC440E" }, // orange
      { "color": "#D3E2E4" }, // orange
      { "color": "#C8C8C8" }, // grau
      { "color": "#6F6F6F" }, // grau
    ],
    xAxis: {
      type: "category",
      reversed: false,
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

          //indentation of labels, except category-titles
          this.value = this.value.replace("*", "");
//check for value that contains only spaces
          if (sum > 0) return this.value ;
          //else, if sum = 0, then it is assumed to be an intermediate title. return it bold
          return "<b>" + this.value + "</b>";
        }
      },
    },
    yAxis: {
      reversedStacks: false,
      tickInterval: 25,
      labels: {
        y: 10
      }
    },
    legend: {
      //x: 1,
      layout: "horizontal",
      align: "left",
      verticalAlign: "top",
      reversed: false,
      alignColumns: true,
      //itemWidth: 100,
      itemMarginBottom:8,
      itemDistance: 6,
      symbolPadding: 2,
      labelFormatter: function () {
        return this.name;
      },
      itemStyle: {
        textOverflow: undefined,
        whiteSpace: 'nowrap',
      }
    },

  };
}());

