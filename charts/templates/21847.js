(function () {
  return {
    "chart": {
      //      "marginBottom": 65,
      //"marginTop": 75,
      "type": "column",
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
      ]
    },
    plotOptions: {
      series: {
      },
      line: {
        index: 1,
        yAxis: 1,
        threshold: 0,
      },
      column: {
        stacking: "normal",
        pointPadding: 0,
        borderWidth: 0,
        groupPadding: 0.1,
        minPointLength: 0.5,
        index: 0,
        yAxis: 0,
        threshold: 0,
      },
    },

    tooltip: {
      shared: true,
      useHTML: true,
      followPointer: true,
      formatter: function () {
        var h = '<span style="font-size: 10px">' + this.points[0].key + '</span>', sum = 0, ki = '', s='', t='';
        $.each(this.points, function (i, point) {
          if (this.series.userOptions.type == 'line') {
            t = '<br><span style="color:' + point.color + '">\u25CF</span>&nbsp;&nbsp;' + point.series.name + ': '
              + '<b>' + Highcharts.numberFormat(point.y, 1) + ' °C</b>';
          } else if (this.series.userOptions.type == null) {
            s += '<tr><td><span style="color:' + point.color + '">\u25CF</span>&nbsp;&nbsp;' + point.series.name + ': </td>'
              + '<td style="text-align:right">&nbsp;<b>' + Highcharts.numberFormat(point.y, 1) + '</b></td>'
              + '<td style="text-align:right">&nbsp;(' + Highcharts.numberFormat(point.percentage, 1) + '%)</td></tr>';
            sum += point.y;
          } else if (this.series.userOptions.type == 'errorbar') {
            ki = '<tr><td style="padding-top: 3px;"><span style="color:transparent">\u25CF</span>&nbsp;&nbsp;95%-Konfidenzintervall:&nbsp;</td>'
              + '<td style="text-align:left padding-top: 3px;" colspan=2>&nbsp;<b>' + Highcharts.numberFormat(point.point.low, 1) + '</b> - <b>' + Highcharts.numberFormat(point.point.high, 1) + '</b></td>'
              + '</tr>';
          }

        });
        return h
          + '<table><tr><td style="padding-top: 7px;"><b>Todesfälle:</b></td></tr>' 
          + s
          + '<tr><td style="padding-top: 3px;"><span style="color:transparent">\u25CF</span>&nbsp;&nbsp;Total: </td>'
          + '<td style="text-align:right; padding-top: 3px;">&nbsp;<b>' + Highcharts.numberFormat(sum, 1) + '</b></td><td></td></tr>' 
          + ki
          + '</table>'
          + t;
      },
    }, 
    "xAxis": {
      "type": "category"
    },
     yAxis: [
      {
        reversedStacks: false,
        title: {
          text: null,
        },
        labels: {
          format: "{value:,.0f}",
          style: {
            color: "black",
          },
        },
        plotLines: [
          {
            color: "#B9CFD7",
            value: 0,
            width: 2,
          },
        ],
      },
      {
        opposite: true,
        title: {
          text: null,
        },
        labels: {
          format: "{value:,.0f}",
          style: {
            color: "black",
          },
        },
        plotLines: [
          {
            color: "#B9CFD7",
            value: 0,
            width: 2,
          },
        ],
      },
    ],
    "legend": {
      itemDistance: 15,
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      alignColumns: false,
    },
    "series": [
      {
        "index": 0,
        color: "#5555ff",
        type: "line",
        marker: {
          enabled: false,
        },
        index:99
      },
      {
        "index": 0,
        color: "#facd5a",
      },
      {
        "index": 1,
        color: "#dc440e",
      },
      {
        "index": 2,
        color: "#B00000",
      },
      {
        "index": 3,
        "type": "errorbar",
        color: "#555555",
        "tooltip": {
          "pointFormatter": function () {
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low), 1) + '</b> - <b>' + Highcharts.numberFormat((this.high), 1) + '</b>)';
          },
        }
      },
      /* {
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
       },*/


    ],

  }
}());

