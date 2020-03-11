(function () {
  return {
    "xAxis": {
      "tickInterval": 3,
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}",
        "formatter": function () {
          return Highcharts.numberFormat((this.value), 0);
        },
      }
    },
    "tooltip": {
      "pointFormatter": function () {
        return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + ' Stunden</b><br/><b>'
      },
    },
    "series": [
      { "color": "#008AC3" }, /*Männer*/
      { "color": "#DC440E" }, /*Frauen*/
      { "color": "#3c3c3c" }, /*Total*/
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "plotOptions": {
      series: {
        pointPadding: 0,
        borderWidth: 0
      }
    },
    chart: {
      "type": "column",
    }
  }
}());