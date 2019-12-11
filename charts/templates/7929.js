(function () {
  return {
    "chart": {
      "type": "column",
      spacingTop: 5
    },
    //seriesMapping necessary for charts with error bars. 
    "data": {
      "seriesMapping": [
        {
          "x": 0
        },
        {
          "x": 0
        },

      ]
    },
    plotOptions: {
      series: {
        pointWidth: 50,
        //pointPadding: 0.1,
        borderWidth: 0
      }
    },
    tooltip: {
      shared: true
    },
    "series": [
      {
        "index": 0,
        color: "#71a3b5",
        "tooltip": {
          "pointFormatter": function () {
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((100 * this.y), 1) + '%</b>';
          }
        }
      },
      {
        "index": 1,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function () {
            return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((100 * this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((100 * this.high), 1) + '%</b>)<br/>';
          },
        }
      },
    ],
    "xAxis": {
      "type": "category"
    },
    "yAxis": {
      "labels": {
        "formatter": function () {
          return Highcharts.numberFormat((100 * this.value), 0) + '%';
        },
      }
    },
    "legend": {
      itemDistance: 5,
      "enabled": false,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left"
    }
  }
}());
