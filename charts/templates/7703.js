(function () {
  return {
    plotOptions: {
      series: {
        borderWidth: 0,
      }
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.1f}",
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
      "type": "column"
    }
  };
}());