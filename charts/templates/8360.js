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
        pointPadding: 0,
        borderWidth: 0
      }
    },
    tooltip: {
      shared: true
    },

    "series": [
      {
        "index": 0,
        color: "#007A2F",
        "tooltip": {
          "pointFormatter": function () {
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 0) + '</b>';
          }
        }
      },
      {
        "index": 1,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function () {
            return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 0) + '</b> - <b>' + Highcharts.numberFormat((this.high), 0) + '</b>)';
          },
        }
      },
      {
        "index": 2,
        color: "#68AB2B",
        "tooltip": {
          "pointFormatter": function () {
            return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 0) + '</b>';
          }
        }

      },
      {
        "index": 3,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function () {
            return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 0) + '</b> - <b>' + Highcharts.numberFormat((this.high), 0) + '</b>)';
          }
        }
      },
      {
        "index": 4,
        color: "#73B97C",
        "tooltip": {
          "pointFormatter": function () {
            return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 0) + '</b>';
          }
        }
      },
      {
        "index": 5,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function () {
            return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 0) + '</b> - <b>' + Highcharts.numberFormat((this.high), 0) + '</b>)';
          }
        }
      },
      {
        "index": 6,
        color: "#246370",
        "tooltip": {
          "pointFormatter": function () {
            return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 0) + '</b>';
          }
        }
      },
      {
        "index": 7,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function () {
            return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 0) + '</b> - <b>' + Highcharts.numberFormat((this.high), 0) + '</b>)';
          }
        }
        },
        {
          "index": 8,
          color: "#0F7399",
          "tooltip": {
            "pointFormatter": function () {
              return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 0) + '</b>';
            }
          }
        },
        {
          "index": 9,
          "type": "errorbar",
          "tooltip": {
            "pointFormatter": function () {
              return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 0) + '</b> - <b>' + Highcharts.numberFormat((this.high), 0) + '</b>)';
            }
          }
      },
      {
        "index": 10,
        color: "#689199",
        "tooltip": {
          "pointFormatter": function () {
            return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 0) + '</b>';
          }
        }
      },
      {
        "index": 11,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function () {
            return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 0) + '</b> - <b>' + Highcharts.numberFormat((this.high), 0) + '</b>)';
          }
        }
    },
    {
      "index": 12,
      color: "#A8C3CA",
      "tooltip": {
        "pointFormatter": function () {
          return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 0) + '</b>';
        }
      }
    },
    {
      "index": 13,
      "type": "errorbar",
      "tooltip": {
        "pointFormatter": function () {
          return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 0) + '</b> - <b>' + Highcharts.numberFormat((this.high), 0) + '</b>)';
        }
      }
  },
  {
    "index": 14,
    color: "#D3E2E4",
    "tooltip": {
      "pointFormatter": function () {
        return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 0) + '</b>';
      }
    }
  },
  {
    "index": 15,
    "type": "errorbar",
    "tooltip": {
      "pointFormatter": function () {
        return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 0) + '</b> - <b>' + Highcharts.numberFormat((this.high), 0) + '</b>)';
      }
    }
},
    ],
    "xAxis": {
      "type": "category"
    },
    "yAxis": {
      tickInterval: 50000,
      "labels": {
        "formatter": function () {
          return Highcharts.numberFormat((this.value), 0);
        },
      }
    },
    "legend": {
      "enabled": true,
      //itemDistance: 5,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "chart": {
      "marginBottom": 80,
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