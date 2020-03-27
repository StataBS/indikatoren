(function () {
  return {
    "xAxis": {
      "tickInterval": 2
    },
    "yAxis": {
      min: null,
      plotLines: [{
        value: 100,
        color: '#B9CFD7',
        width: 2
      }],
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
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
      "itemMarginBottom": 5,
      "align": "left",
    },
  }
}());
