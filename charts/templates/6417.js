/*
global Highcharts
*/

(function () {
  return {
    "chart": {
      "marginBottom": 65,
      //"marginTop": 75,
      "type": "column",
      "inverted": false
    },
    subtitle: {
      //useHTML: true
    },
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0
      }
    },
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
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
    },
    tooltip: {
      shared: true
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
        {
          "x": 0
        },
        {
          "x": 0
        },
        {
          "x": 0
        },
        {
          "x": 0
        },
        {
          "x": 0
        },
        {
          "x": 0
        }
      ]
    },
    "series": [
      {
        "index": 0,
        color: "#661200",
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
            return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((100 * this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((100 * this.high), 1) + '%</b>)';
          },
        }
      },
      {
        "index": 2,
        color: "#dc440e",
        "tooltip": {
          "pointFormatter": function () {
            return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((100 * this.y), 1) + '%</b>';
          }
        }

      },
      {
        "index": 3,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function () {
            return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((100 * this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((100 * this.high), 1) + '%</b>)';
          }
        }
      },
      {
        "index": 4,
        color: "#7f5f1a",
        "tooltip": {
          "pointFormatter": function () {
            return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((100 * this.y), 1) + '%</b>';
          }
        }
      },
      {
        "index": 5,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function () {
            return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((100 * this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((100 * this.high), 1) + '%</b>)';
          }
        }
      },
      {
        "index": 6,
        color: "#ffda80",
        "tooltip": {
          "pointFormatter": function () {
            return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((100 * this.y), 1) + '%</b>';
          }
        }
      },
      {
        "index": 7,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function () {
            return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((100 * this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((100 * this.high), 1) + '%</b>)<br/>';
          }
        }
      },
    ],
  };
}());