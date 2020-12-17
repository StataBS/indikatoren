(function () {
  return {
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0
      }
    },
    "xAxis": {
      "type": "category",
      labels: {
        rotation: -45
      }
    },
    "yAxis": {
      max: 75,
      tickInterval: 25
    },
    "series": [
      { "color": "#661200" },
      { "color": "#dc440e" },
      { "color": "#7f5f1a" },
      { "color": "#ffda80" },
    ],
    "legend": {
      itemWidth: 110,
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      itemDistance: 5
    },
    "chart": {
      "type": "column",
      "inverted": false
    }
  };
}());

