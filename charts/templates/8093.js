(function () {
  return {
    "xAxis": {
      tickInterval: 1
    },
    "yAxis": {
      tickInterval: 10
    },
    "series": [
      {
        "color": "#cd9c00"
      },
      {
        "color": "#b375ab"
      },
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
    },
    "plotOptions": {
      "line": {
        "connectNulls": true,
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    }
  }
}());
