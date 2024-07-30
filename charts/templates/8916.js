(function () {
  return {
    "chart": {
      "type": "column",
    },
    plotOptions: {
      series: {
        borderWidth: 0
      }
    },
    "xAxis": {
      "type": "category",
    },
    "yAxis": {
      tickInterval: 5,
      "labels": {
        "format": "{value:,.0f}%"
      }
    },
    "series": [
      { "color": "#990300", "visible": true }, /* rot*/
    ],
  }
}());