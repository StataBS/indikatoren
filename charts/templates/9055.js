(function () {
  return {
    "xAxis": {
      "tickInterval": 10
    },
    "yAxis": {
      "min": 0,
      max: 3000,
      tickInterval: 500,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "series": [
      {        "color": "#007A2F"      }, /* black */
      {        "color": "#923F8D"      }, /* violett */
      {        "color": "#DC440E"      }, /* rot */
      {        "color": "#FFDA80"      },/* gelb  */
    ],
    "legend": {
      "enabled": true,
      //"x": 50,
      //"y": 25,
      width: 300,
      "itemWidth": 140,
      "layout": "horizontal",
      "verticalAlign": "top",
      //"itemMarginBottom": 0,
      "align": "left",
    },
    "plotOptions": {
      "line": {
        "connectNulls": true,
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    },
    chart: {
      type: 'line'
    }
  }
}());
