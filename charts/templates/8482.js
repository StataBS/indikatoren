(function () {
  return {
    "yAxis": {
      tickInterval: 20,
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
        "stacking": "percent"
      }
    },
    "series": [
      { "color": "#474747", legendIndex: 7, index: 7 },
      { "color": "#FF8028", legendIndex: 6, index: 6 },
      { "color": "#923F8D", legendIndex: 5, index: 5 },
      { "color": "#68AB2B", legendIndex: 4, index: 4 },
      { "color": "#689199", legendIndex: 3, index: 3 },
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
      marginTop: 8,
      type: "column",
      inverted: false,
    },
    "tooltip": {
      "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> ({point.percentage:.1f}%)<br/>',
    },
  };
}());

