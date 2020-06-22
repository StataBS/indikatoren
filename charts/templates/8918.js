(function () {
  return {
    "chart": {
      "type": "column"
    },
    plotOptions: {
      column: {
        stacking: 'normal'
      },
      "series": {
        "borderWidth": 0,
        "stacking": "percent"
      }
    },
    "xAxis": {
      "tickInterval": 1,
      labels: { step: 1, rotation: -45 }
    },
    "yAxis": {
      "min": 0,
      "labels": {
        "format": "{value}%"
      }
    },
    "series": [
      {
        "color": "#8A8A8A",
        "legendIndex": 3
      },
      {
        "color": "#008AC3",
        "legendIndex": 2
      }, /* blau */
      {
        "color": "#68ab2b",
        "legendIndex": 1
      }, /* grün */
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      alignColumns: false,
      "itemMarginBottom": 5,
    }
  }
}());