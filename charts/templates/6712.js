(function () {
  return {
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
        itemWidth: 10,
      }
    },
    "xAxis": {
      "type": "category",
      "labels": {
        padding: -100,
        x: -5,
        step: 1,
        y: 3,
      }
    },
    "yAxis": {
      max: 750000,
      //tickInterval: 200000,
      "labels": {
        y: 18,
        "format": "{value:,.0f}"
      }
    },
    "series": [
      { "color": "#923F8D" },
      { "color": "#E7CEE2" }
    ],
    "legend": {
      //itemWidth: 120,
      itemDistance: 6,
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left"
    },
    "chart": {
      marginRight: 18,
      "type": "column",
      "inverted": true,
    }
  }
}());