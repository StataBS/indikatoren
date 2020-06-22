(function () {
  return {
    "chart": {
      "type": "column",
    },
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
        itemWidth: 10,
      }
    },
    "xAxis": {
      "type": "linear",
      tickInterval: 1,
      labels: {
        rotation: -45,
//        step: 2,
      }
    },
    "legend": {
      "enabled": false,
    },
    "series": [
      { "color": "#CD9C00", "visible": true } /* hellbraun*/
    ],
  }
}());