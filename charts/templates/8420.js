(function () {
  return {
    "xAxis": {
      "tickInterval": 1,
    },
    "yAxis": {
      "min": 0,
      "tickInterval": 10,
      "labels": {
        "format": "{value}%"
      }
    },
    "series": [
      {
        "color": "#6F6F6F",
        "legendIndex": 1
      }, /* Basel */
      {
        "color": "#923F8D",
        "legendIndex": 2
      }, /* Genf */
      {
        "color": "#008AC3",
        "legendIndex": 2
      }, /* blau */
      {
        "color": "#007A2F",
        "legendIndex": 2
      }, /* grün */
    ],
    "legend": {
      "enabled": true,
      //"x": 45,
      //"y": 35,
      //"itemWidth": 150,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "plotOptions": {
      "line": {
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    }
  }
}());