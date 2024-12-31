(function () {
  return {
    plotOptions: {
      series: {
        pointPadding: 0.2,
      }
    },
    series: [
      { "color": "#007a2f" }, // dunkelgrün
      { "color": "#68ab2b" }, // grün
      { "color": "#ffbb58" }, // orange
      { "color": "#dc440e" }, // rot
      { "color": "#C8C8C8" }, // grau
      { "color": "#6F6F6F" }, // grau
    ],
    xAxis: {
      type: "category",
      labels: {
        style: {
          fontSize: "10px",
        },
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
          var nString = (this.chart.series.length == allVisibleSeries.length) ? 'N=' : 'n=';

          //if chart is inverted then add linebreak in xAxis labels before (N=XY), else space
          var doBr = (this.chart.inverted == true) ? ' ' : '<br/>';

          var formattedSum = Highcharts.numberFormat(sum, 0, ",", "")

          this.value = this.value.replace("und weitere", "u.a.");

          //check for value that contains only spaces
          return (this.value.replace(/\s/g, "") == "") ? this.value : this.value + doBr + '<span style="font-size:8px"> (' + nString + formattedSum + ')</font>';
        }
      }
    },
    yAxis: {
      reversedStacks: false,
    },
    legend: {
      reversed: false,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      labelFormatter: function () {
        return this.name.replace("/", " /<br/>");

      }
    }
  };
}());
