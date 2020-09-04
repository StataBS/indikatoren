(function () {
  return {
    "xAxis": {
      "tickInterval": 1
    },
    "yAxis": {
      "tickInterval": 5000000,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "series": [
      {
        "color": "#FABD24",
        legendIndex: 0,
      }, /* hellgelb */
      {
        "color": "#7F5F1A",
        legendIndex: 2,
      }, /* dunkelgelb */
      {
        "color": "#008AC3",
        legendIndex: 1,
      }, /* hellblau */
      {
        "color": "#2B0099",
        legendIndex: 3,
      }, /* dunkelblau */
      {
        "color": "#68AB2B",
        legendIndex: 5,
      }, /* violett */
    ],
    "legend": {
      "enabled": true,
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
        "connectNulls": true,
      }
    }
  };
}());
