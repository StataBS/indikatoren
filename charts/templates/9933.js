(function () {
  return {
    "chart": {
      "type": "column",
      spacingBottom: 45,
    },
    "plotOptions": {
      "series": {
        "stacking": "normal"
      }
    },
    xAxis: {
      tickInterval: 1,

    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}",
        "formatter": function () {
          return Highcharts.numberFormat((this.value), 0) + '';
        },
      }
    },
    "legend": {
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemMarginBottom": 5,
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
      "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
    },
    "series": [
      { "color": "#67401E", "index": 1, "legendIndex": 0 }, /*grün dunkel2*/
      { "color": "#C4AB91", "index": 0, "legendIndex": 2 }, /*grün mittel*/
    ],
  }
}());
