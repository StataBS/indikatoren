(function () {
  return {
    plotOptions: {
      series: {
        borderWidth: 0,
      }
    },
    "yAxis": {
      tickAmount: 6,
      max: 5,
      "labels": {
        "format": "{value:,.0f}",
      },
    },
    "xAxis": {
      "tickInterval": 1
    },
    "legend": {
      "enabled": false
    },
    "series": [
      {
        "color": "#68ab2b"
      }
    ],
    "chart": {
      "type": "column",
      spacingTop: 5
    }
  };
}());