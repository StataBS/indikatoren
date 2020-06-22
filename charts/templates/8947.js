(function () {
  return {
    "xAxis": {
      "tickInterval": 1
    },
    "yAxis": {
      tickInterval: 10,
      "labels": {
        "format": "{value:,.0f}%"
      }
    },
    "series": [
      { "color": "#008AC3 " }, /* blau */
      { "color": "#B00000" }, /* rot */
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemMarginBottom": 5,
      //"itemWidth": 1000,
    },
  }
}());
