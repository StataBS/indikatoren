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
        pointPadding: 0.14,
       borderWidth: 1.2,
       states: {
        hover: {
            borderColor: null
        }
    }
      }
    },
    tooltip: {
      shared: true
    },

    "series": [
      {
        "index": 0,
        color: "#D7E8D2",
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
        zIndex:3,
        crisp: false,
        pointRange: 0,
        lineWidth: 0.5,
        "tooltip": {
          "pointFormatter": function () {
            return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((this.high), 1) + '%</b>)';
          },
        }
      },
        {
          "index": 2,
          color: "#73B97C",
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
          zIndex:3,
          crisp: false,
          pointRange: 0,
          lineWidth: 0.5,
          "tooltip": {
            "pointFormatter": function () {
              return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((this.high), 1) + '%</b>)';
            },
          }
        },
        {
          "index": 4,
          color: "#68AB2B",
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
          zIndex:3,
          crisp: false,
          pointRange: 0,
          lineWidth: 0.5,
          "tooltip": {
            "pointFormatter": function () {
              return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((this.high), 1) + '%</b>)';
            }
          }
        },
        {
          "index": 6,
          color: "#007A2F",
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
          zIndex:3,
          crisp: false,
          pointRange: 0,
          lineWidth: 0.5,
          "tooltip": {
            "pointFormatter": function () {
              return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((this.high), 1) + '%</b>)';
            }
          }
        },
        {
          "index": 8,
          color: "#A8C3CA",
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
          zIndex:3,
          crisp: false,
          pointRange: 0,
          lineWidth: 0.5,
          "tooltip": {
            "pointFormatter": function () {
              return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((this.high), 1) + '%</b>)';
            }
          }
          },
          {
            "index": 10,
            color: "#71A3B5",
            borderColor: null,
            "tooltip": {
              "pointFormatter": function () {
                return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '%</b>';
              }
            }
          },
          {
            "index": 11,
            "type": "errorbar",
            zIndex:3,
            crisp: false,
            pointRange: 0,
            lineWidth: 0.5,
            "tooltip": {
              "pointFormatter": function () {
                return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((this.high), 1) + '%</b>)';
              }
            }
        },
        {
          "index": 12,
          color: "#689199",
          borderColor: null,
          "tooltip": {
            "pointFormatter": function () {
              return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '%</b>';
            }
          }
        },
        {
          "index": 13,
          "type": "errorbar",
          zIndex:3,
          crisp: false,
          pointRange: 0,
          lineWidth: 0.5,
          "tooltip": {
            "pointFormatter": function () {
              return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((this.high), 1) + '%</b>)';
            }
          }
      },
      {
        "index": 14,
        color: "#0F7399",
        borderColor: null,
        "tooltip": {
          "pointFormatter": function () {
            return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '%</b>';
          }
        }
      },
      {
        "index": 15,
        "type": "errorbar",
        zIndex:3,
        crisp: false,
        pointRange: 0,
        lineWidth: 0.5,
        "tooltip": {
          "pointFormatter": function () {
            return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((this.high), 1) + '%</b>)';
          }
        }
    },
    {
      "index": 16,
      color: "#246370",
      borderColor: null,
      "tooltip": {
        "pointFormatter": function () {
          return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '%</b>';
        }
      }
    },
    {
      "index": 17,
      "type": "errorbar",
      zIndex:3,
      crisp: false,
      pointRange: 0,
      lineWidth: 0.5,
      "tooltip": {
        "pointFormatter": function () {
          return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((this.high), 1) + '%</b>)';
        }
      }
  },
  
      ],
    "xAxis": {
      "type": "category"
    },
    "yAxis": {
      tickInterval: 20,
      "labels": {
        "formatter": function () {
          return Highcharts.numberFormat((this.value), 0) + '%';
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