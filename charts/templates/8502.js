(function () {
  return {
    "xAxis": {
      "tickInterval": 12,
     "type": "category",
      labels: {
        x: 20,
        "formatter": function () {
          return this.value.split("-").slice(0, -1);
        },
      }
    },
    "yAxis": {
      tickInterval: 1,
      "labels": {
        "format": "{value:,.0f}%",
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormatter": function () {
        return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '% </b><br/><b>'
      },
    },
    "series": [
      { "color": "#474747" },
      { "color": "#FF8028" },
      { "color": "#FABD24" },
      { "color": "#990300" }
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "plotOptions": {
      "line": {
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    }
  }
}());