(function () {
  return {
    "xAxis": {
//      "type": "category",
      "labels": {
        "rotation": 0
      }
    },
    yAxis: {
      min: -6,
      max: 24,
      tickInterval: 3
    },
    "series": [
      { "color": "#69929b", "visible": true }, /* gelb*/
      { "color": "#c5ab92", "visible": true }, /* grün */
      { "color": "#ff8028", "visible": true }, /* grün */
      { "color": "#933f8d", "visible": true } /* grün */
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      //"x": 25,
      //"y": 30,    
    },
    "chart": {
      "type": "line",
//      "inverted": true,
      //"spacingTop": 100
    }
  }
}());