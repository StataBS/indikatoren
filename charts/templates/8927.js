(function () {
  return {
    "xAxis": {
      tickInterval: 2,
    },
    "yAxis": {
      tickInterval: 0.2,
      "labels": {
        "format": "{value:,.1f}"
      }
    },
    "series": [
      {
        "color": "#008AC3",
      }, /* dunkelrot */
      {
        "color": "#007A2F",
        visible: true,
      }, /* dunkelgrün */
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemMarginBottom": 5,
    }
  }
}());
