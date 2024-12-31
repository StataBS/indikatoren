(function () {
  return {
    "series": [
      { "color": "#3A2012", index: 4, legendIndex: 4 }, // 
      { "color": "#7F5F1A", index: 3, legendIndex: 3 }, // 
      { "color": "#CD9C00", index: 2, legendIndex: 2 }, // 
      { "color": "#C8C8C8", index: 1, legendIndex: 1 },
      { "color": "#6F6F6F", index: 0, legendIndex: 0 }, //
    ],
    "xAxis": {
      "type": "category",
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
    plotOptions: {
      series: {
        //groupPadding: 0,
        pointPadding: 0.2
      }
    },
    legend: {
      reversed: true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      labelFormatter: function () {
        return this.name.replace("/", " /<br/>");

      }
    }
  }
}());

