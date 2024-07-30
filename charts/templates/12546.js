(function () {
  return {
    "plotOptions": {
      "line": {
        "marker": {
          "enabled": false,
          "symbol": "circle",
          // radius: 2
        }
      }
    },
    xAxis: {
      tickPositioner: function () {
        var interval = 1,
          ext = this.getExtremes(),
          i = ext.dataMax,
          pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      }
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}%"
      },
      min:null
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      itemDistance: 5,
      //"itemMarginBottom": 5,
      labelFormatter: function () {
        return this.name.replace(' Schweiz ', ' CH ');  //holt z.B. '2015' aus '2015 Wöchentlich'
      },
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>'
    },
    "series": [
      { color: "#4f81bd", }, /* dunkelblau */
      { color: "#662673", }, /* dunkelviolett */
      { color: "#7F5F1A", marker: { enabled: true } }, /* dunkelbraun */
      { color: "#FABD24", }, /* dunkelgelb */
      { color: "#000000", }, /* schwarz */
    ],
  }
}());
