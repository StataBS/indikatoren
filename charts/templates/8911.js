(function () {
  return {
    "chart": {
      "type": "column",
    },
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
      }
    },
    "xAxis": {
      "type": "category"
    },
    "yAxis": {
      tickInterval: 5,
      "labels": {
        "format": "{value}%"
      }
    },
    "series": [
      { "color": "#b00000" },
      { "color": "#923f8d" },
      //{ "color": "#b375ab" },
    ],
    "legend": {
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
    },
    tooltip: {
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
      shared: true
    },
  }
}());
