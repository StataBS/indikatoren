(function () {
  return {
    "chart": {
      "type": "column",
      "inverted": false
    },
    plotOptions: {
      series: {
        minPointLength: 2,
        pointPadding: .18,
        borderWidth: 0,
      }
    },
    "xAxis": {
      "type": "category",
      tickInterval: 2,
      labels: {
        rotation: -45
      }
    },
    "yAxis": {
      //tickAmount: 15,
      tickInterval: 2
    },
    "series": [
      { "color": "#2F656B" },
      { "color": "#8B2223" }
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
    },
    tooltip: {
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
      //shared: true
    },
  }
}());

