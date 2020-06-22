(function () {
  return {
    "yAxis": {
      //tickAmount: 5,
      tickInterval: 1,
      /*"labels": {
        "format": "{value:,.1f}",
      }*/
    },
    "xAxis": {
      type: "category",
      "tickInterval": 5,
    },
    "series": [
      {
        "color": "#8b2223"
      },
      {
        "color": "#008AC3"
      }
    ],
    legend: {
      enabled: true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left"
    },
  }
}());

