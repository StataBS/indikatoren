(function () {
  return {
    "xAxis": {
      //      "type": "category",
      "labels": {
        "rotation": 0
      }
    },
    yAxis: {
      min: -1.5,
      max: 4.5,
      tickInterval: 0.5,
      plotLines: [{
        color: '#B9CFD7',
        width: 1.5,
        value: 0
    }]
    },
    "series": [
      { "color": "#b9cfd7", "visible": true }, /* gelb*/
      { "color": "#baa85a", "visible": true }, /* grün */
      { "color": "#68411e", "visible": true }, /* grün */
      { "color": "#c5ab92", "visible": true }, /* grün */
      { "color": "#672773", "visible": true }, /* grün */
      { "color": "#b475ab", "visible": true }, /* grün */
      { "color": "#cd9c00", "visible": true }, /* grün */
      { "color": "#7f5f1a", "visible": true }, /* grün */
      { "color": "#45381d", "visible": true }, /* grün */
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