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
          //pointPadding: 0,
          borderWidth: 0,
          groupPadding: 0.1,
        }
      },
      tooltip: {
        shared: true
      },
      "series": [
        {
          "index": 0,
          color: "#008AC3",
          "tooltip": {
            "pointFormatter": function () {
              return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '%</b>';
            }
          }
        },
        {
          "index": 1,
          "type": "errorbar",
          "tooltip": {
            "pointFormatter": function () {
              return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((this.high), 1) + '%</b>)';
            },
          }
        },
        {
          "index": 2,
          color: "#dc440e",
          "tooltip": {
            "pointFormatter": function () {
              return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '%</b>';
            }
          }
  
        },
        {
          "index": 3,
          "type": "errorbar",
          "tooltip": {
            "pointFormatter": function () {
              return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((this.high), 1) + '%</b>)';
            }
          }
        },
        {
          "index": 4,
          color: "#B00000",
          "tooltip": {
            "pointFormatter": function () {
              return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '%</b>';
            }
          }
        },
        {
          "index": 5,
          "type": "errorbar",
          "tooltip": {
            "pointFormatter": function () {
              return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((this.high), 1) + '%</b>)';
            }
          }
        },
        {
          "index": 6,
          color: "#246370",
          "tooltip": {
            "pointFormatter": function () {
              return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '%</b>';
            }
          }
        },
        {
          "index": 7,
          "type": "errorbar",
          "tooltip": {
            "pointFormatter": function () {
              return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((this.high), 1) + '%</b>)';
            }
          }
        },
        {
          "index": 8,
          color: "#474747",
          "tooltip": {
            "pointFormatter": function () {
              return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '%</b>';
            }
          }
        },
        {
          "index": 9,
          "type": "errorbar",
          "tooltip": {
            "pointFormatter": function () {
              return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((this.high), 1) + '%</b>)';
            }
          }
        },
      ],
      "xAxis": {
        "type": "category"
      },
      "yAxis": {
        "labels": {
          "formatter": function () {
            return Highcharts.numberFormat((this.value), 0) + '%';
          },
        }
      },
      "legend": {
        itemDistance: 5,
        "enabled": true,
        "layout": "horizontal",
        "verticalAlign": "top",
        "align": "left",
      },
      "chart": {
        //"marginBottom": 65,
        //"marginTop": 75,
        "type": "column",
        "inverted": false
      }
    }
  }());
  
  