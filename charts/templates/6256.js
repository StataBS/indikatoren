(function () {
  return {
    "xAxis": {
      "tickInterval": 3
    },
    "yAxis": {
      tickInterval: 20,
      min: null,
      plotLines: [{
        value: 100,
        color: '#B9CFD7',
        width: 2
      }]
    },
    "series": [
      { "color": "#B00000" }, /* dunkelrot */
      { "color": "#007A2F" }, /* dunkelgrün */
      { "color": "#4f81bd" }, /* dunkelblau */
      { "color": "#662673" }, /* dunkelviolett */
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
    }
  }
}());
