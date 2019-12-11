(function () {
  return {
    "yAxis": {
      tickInterval: 5,
      "labels": {
        "format": "{value:,.0f}",
      },
    },
    "xAxis": {
      //"type": "category",
      tickInterval: 1
    },
    "legend": {
      "enabled": true,
      "verticalAlign": "top",
      "align": "left"
    },
    "series": [
      {
        "color": "#cd9c00"
      }
    ],
    "chart": {
      "type": "column"
    }
  };
}());