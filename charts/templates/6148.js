(function () {
  return {
    "xAxis": {
      "tickInterval": 1
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}%"
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'
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
      "itemWidth": 100,
      "itemMarginBottom": 5
    },
  }
}());
