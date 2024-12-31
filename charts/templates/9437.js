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
        /* {
           "x": 0
         },
         {
           "x": 0
         },
         {
           "x": 0
         }*/
      ]
    },
    plotOptions: {
      series: {
        stacking: "normal",
        //pointPadding: 0.1,
        // groupPadding: 0,
        borderWidth: 0
      },
    },
    tooltip: {
      shared: true
    },
    "series": [
      {
        "index": 0,
        "color": "rgb(180,117,171)",
        "tooltip": {
          "pointFormatter": function () {
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 0) + '</b>';
          },
          "footerFormat": '<br>Total: <b>{point.total:,.0f}</b>'

        }
      },
      /*{
        "index": 1,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function () {
            return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 0) + '</b> - <b>' + Highcharts.numberFormat((this.high), 0) + '</b>)';
          },
        }
      },*/
      {
        "index": 2,
        "color": "rgb(103,39,115)",
        "tooltip": {
          "pointFormatter": function () {
            return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 0) + '</b>';
          }
        }

      },
      /*{
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
        visible: false,
        "color": "rgb(250,189,36)",
        "tooltip": {
          "pointFormatter": function () {
            return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 0) + '</b>';
          }
        }
      },
      {
        "index": 5,
        visible: false,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function () {
            return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 0) + '</b> - <b>' + Highcharts.numberFormat((this.high), 0) + '</b>)';
          }
        }
      },*/
    ],
    "xAxis": {
      "type": "category",
      tickInterval: 1,
      labels: {
        rotation: -45,
        step: 1,
      }
      /*plotLines: [{
        color: '#999999',
        dashStyle: "longDash",
        width: 1,
        value: 2017.5
    }]*/
    },
    "yAxis": {
      tickAmount: 5,
      "labels": {
        "formatter": function () {
          return Highcharts.numberFormat((this.value), 0);
        },
      }
    },
    "legend": {
      "enabled": true,
      itemDistance: 5,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
    },
    "chart": {
      "type": "column",
      "inverted": false
    },
    subtitle: {
      useHTML: true
    }
  };
}());