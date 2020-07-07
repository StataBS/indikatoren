(function () {
  return {
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}",
        "formatter": function () {
          return Highcharts.numberFormat((this.value), 0) + '%';
        },
      }
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
      series: {
        "stacking": "percent",
        //pointWidth: 50,
        // groupPadding: 0,
      }
    },
    "series": [
      { "color": "#474747", legendIndex: 6, index: 6 },
      { "color": "#A8C3CA", legendIndex: 5, index: 5 },
      { "color": "#923F8D", legendIndex: 4, index: 4 },
      { "color": "#68AB2B", legendIndex: 3, index: 3 },
      { "color": "#DC440E", legendIndex: 2, index: 2 },
      { "color": "#FABD24", legendIndex: 1, index: 1 },
    ],
    "legend": {
      "enabled": true,
      "layout": "vertical",
      itemDistance: 5,
      "verticalAlign": "middle",
      "align": "right",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "data": {
      "switchRowsAndColumns": true
    },
    "chart": {
      type: "column",
      inverted: false,
    },
    "tooltip": {
      "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> ({point.percentage:.1f}% von {point.total:,.0f})<br/>',
    },
  };
}());

