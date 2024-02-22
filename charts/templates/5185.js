(function () {
  return {
    "chart": {
      type: 'column',
      spacingBottom: 45,
      "inverted": false
    },
    "yAxis": {
      tickInterval: 1000,
    },
    "xAxis": {
      "type": "category",
      "labels": {
        "formatter": function () {
          return this.value;
        }
      }
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        groupPadding: .2,
      }
    },
    tooltip: {
      valueDecimals: 0,
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.percentage:.1f}%)<br/>',
      footerFormat: 'Total: <b>{point.total:,.0f}</b>',
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "itemWidth": 200,
      "verticalAlign": "top",
      "align": "left",
    },
    "series": [
      { "color": "#D3E2E4", index: 0, legendIndex: 0 }, /* */
      { "color": "#689199", index: 1, legendIndex: 1 }, /* */
      { "color": "#2F656B", index: 2, legendIndex: 2 },  /* */
      { "color": "#083038", index: 3, legendIndex: 3 },  /* */
    ],
  }
}());
