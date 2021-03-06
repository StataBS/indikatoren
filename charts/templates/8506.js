/*
global Highcharts
*/

(function () {
  return {
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
        },
        {
          "x": 0
        },
        {
          "x": 0
        }
      ]
    },
    plotOptions: {
      series: {
        pointPadding: 0.1,
        borderWidth: 1
      }
    },
    tooltip: {
      shared: true
    },

    "series": [
      {
        "index": 0,
        color: "#246370",
        borderColor: null,
        "tooltip": {
          "pointFormatter": function () {
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '%</b>';
          }
        }
      },
      {
        "index": 1,
        "type": "errorbar",
        lineWidth: 0.5,
        "tooltip": {
          "pointFormatter": function () {
            return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((this.high), 1) + '%</b>)<br/>';
          },
        }
      },
      {
        "index": 2,
        color: "#0F7399",
        borderColor: null,
        "tooltip": {
          "pointFormatter": function () {
            return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '%</b>';
          }
        }

      },
      {
        "index": 3,
        "type": "errorbar",
        lineWidth: 0.5,
        "tooltip": {
          "pointFormatter": function () {
            return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((this.high), 1) + '%</b>)<br/>';
          }
        }
      },
      {
        "index": 4,
        color: "#689199",
        borderColor: null,
        "tooltip": {
          "pointFormatter": function () {
            return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '%</b>';
          }
        }
      },
      {
        "index": 5,
        "type": "errorbar",
        lineWidth: 0.5,
        "tooltip": {
          "pointFormatter": function () {
            return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((this.high), 1) + '%</b>)<br/>';
          }
        }
      },
      {
        "index": 6,
        color: "#A8C3CA",
        borderColor: null,
        "tooltip": {
          "pointFormatter": function () {
            return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '%</b>';
          }
        }
      },
      {
        "index": 7,
        "type": "errorbar",
        lineWidth: 0.5,
        "tooltip": {
          "pointFormatter": function () {
            return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((this.high), 1) + '%</b>)<br/>';
          }
        }
      },
      {
        "index": 8,
        color: "#D3E2E4",
        borderColor: null,
        "tooltip": {
          "pointFormatter": function () {
            return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '%</b>';
          }
        }
      },
      {
        "index": 9,
        "type": "errorbar",
        lineWidth: 0.5,
        "tooltip": {
          "pointFormatter": function () {
            return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((this.high), 1) + '%</b>)<br/>';
          }
        }
      },
    ],
    "xAxis": {
      "type": "category",
      labels: {
        rotation: 0
      }
    },
    "yAxis": {
      tickAmount: 5,
      "labels": {
        "formatter": function () {
          return Highcharts.numberFormat((this.value), 0) + '%';
        },
      }
    },
    "legend": {
      "enabled": true,
      itemDistance: 5,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "chart": {
      "marginBottom": 35,
      "type": "column",
      "inverted": false
    },
    subtitle: {
      useHTML: true
    },
    exporting: {
      allowHTML: true,
    },
  };
}());