(function () {
  return {
    "chart": {
      inverted: true,
      width: 665,
      height: 400,
      marginRight: 12
    },
    plotOptions: {
      series: {
        pointPadding: 0.27,
        groupPadding: -.5,
        borderWidth: 0,
        shadow: false,
        //pointWidth: 20,
      }
    },
    "xAxis": {
      //min: 0,
      //max: 34,
      "labels": {
        //rotation: -90,
        step: 1,
        overflow: "justify",
        formatter: function () {
          //console.log(this);
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

            var txt = (this.value.slice(0, 4) == '2019') ? this.value.slice(0, 4) : this.value.slice(6) + ' ' + this.value.slice(0, 4);

            var txt = txt
                .replace("mögl.", "m.")
                .replace("im ", "")
                .replace("am ", "")
                .replace("in ", "")
                .replace("versorgung", "vers.")
                .replace("öffentlicher", "öff.");

            //check for value that contains only spaces
            return (txt.replace(/\s/g, "") == "") ? txt : txt + ' (' + nString + sum + ')';
        
          //return (this.value.slice(0, 4) == '2019') ? this.value.slice(0, 4) : this.value.slice(6) + ' ' + this.value.slice(0, 4);
        },
      }
    },
    yAxis: {
      labels: {
        y: 15,
        rotation: 0
      }
    },
    "legend": {
      alignColumns: false,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "right",
      padding: 12,
      margin: 0,
      itemDistance: 5,
    },
    "series": [
      { "color": "#007A2F", index: 5, legendIndex: 1 }, /*dunkelgrün*/
      { "color": "#73B97C", index: 4, legendIndex: 2 }, /*hellgrün*/
      { "color": "#FABD24", index: 3, legendIndex: 3 }, /*hellrot*/
      { "color": "#CD9C00", index: 2, legendIndex: 4 }, /*dunkelrot*/
      { "color": "#C8C8C8", index: 1, legendIndex: 5 },
      { "color": "#6F6F6F", index: 0, legendIndex: 6 },
    ],
  };
}());