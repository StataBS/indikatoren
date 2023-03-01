(function () {
  return {
    "yAxis": {
      tickInterval: 1,
      "labels": {
        "format": "{value:,.0f}",
      },
    },
    "xAxis": {
      tickInterval: 1
      //"type": "category",
    },
    "legend": {
      "enabled": true,
      "verticalAlign": "top",
      "align": "left"
    },
    "series": [
      {
        "color": "#cd9c00"
      },
      {
        "color": "#b375ab"
      }
    ],
    "chart": {
      "type": "column"
    }
  };
}());