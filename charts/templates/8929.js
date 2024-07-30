(function () {
  return {
      chart: {
          inverted: true,
          //height:820,
      },
      plotOptions: {
          column: {
              groupPadding: 0,
          }
      },
      yAxis: {
          tickInterval: 25,
      },
      xAxis: {
          type: "category",
          labels: {
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
                  var nString =  'n=';
                    if (this.value.match(/Total/)) nString = (this.chart.series.length == allVisibleSeries.length) ? 'N=' : 'n=';

                  //delete everything before ":", including ":"
                  //this.value = this.value.replace(/[^:]*:/, "");
                  //...after...
                  //this.value = this.value.replace(/:.*/, "");
                  this.value = this.value.replace(/: Alle/, "");

                  //check for value that contains only spaces
                  if (sum != 0) return (this.value.replace(/\s/g, "") == "") ? this.value : this.value;// + ' (' + nString + sum + ')';
                  //else, if sum = 0, then it is assumed to be an intermediate title. return it bold
                  return "<b>" + this.value + "</b>";
              }
          }
      },
      "legend": {
        "enabled": true,
        "layout": "horizontal",
        "verticalAlign": "top",
        "itemMarginBottom": 2,
        "align": "left",
        itemWidth: 140,
        width: 300,
        itemStyle: {
          textOverflow: "none",
          whiteSpace: "nowrap"
        },
        labelFormatter: function () {
          return this.name.replace('angebote','angeb.')
          .replace('Schuljahr','Schulj.')
          .replace('bildung','b.')
          .replace('Unbekannt','Unb.');
        },
      },
  "series": [
    { "color": "#083038", "index": 5, "legendIndex": 0 }, /*gelb*/
      { "color": "#246370", "index": 4, "legendIndex": 1 }, /*blau1*/
      { "color": "#689199", "index": 3, "legendIndex": 2 }, /*blau2*/
      { "color": "#A8C3CA", "index": 2, "legendIndex": 3 }, /*blau3*/
      { "color": "#D3E2E4", "index": 1, "legendIndex": 4 }, /*blau4*/
      { "color": "#FABD24", "index": 0, "legendIndex": 5 }, /*blau5*/

  ],
}
}());