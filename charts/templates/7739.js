(function () {
  return {
    "plotOptions": {
      "line": {
        "connectNulls": true,
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    },
    "xAxis": {
      //"tickInterval": 1
    },
    "yAxis": {
      "min": 0,
      max: 3000,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
    },
    "series": [
      { "color": "#007A2F" }, /* black */
      { "color": "#923F8D" }, /* violett */
      { "color": "#DC440E" }, /* rot */
      { "color": "#FFDA80" },/* gelb  */
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "align": "left",
      "verticalAlign": "top",
      //"x": 50,
      //"y": 25,
      "itemWidth": 150,
      "itemMarginBottom": 5,
    }
  }
}());
