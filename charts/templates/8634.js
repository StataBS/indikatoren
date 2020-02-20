(function () {
  return {
    subtitle: {
      useHTML: true
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
        }
      ]
    },
    plotOptions: {
      series: {
        // pointPadding: 0,
        borderWidth: 0,
        stickyTracking: false
      }
    },
    tooltip: {
      snap: 0,
      shared: true
    },
    "series": [
      {
        "colorByPoint": true,
        "index": 0,
        color: "#73b97c",
        "tooltip": {
          "pointFormatter": function () {
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + ' Fr.</b><br/>';
          }
        }
      },
      {
        "index": 1,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function () {
            return '(95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 1) + ' Fr.</b> - <b>' + Highcharts.numberFormat((this.high), 1) + ' Fr.</b>)<br/>';
          }
        }
      }
    ],
    "colors": [
      "#73b97c",
      "#73b97c",
      "#73b97c",
      "#73b97c",
      "#73b97c",
      "#73b97c",
      "#73b97c",
      "#73b97c",
      "#73b97c",
      "#73b97c",
      "#73b97c",
      "#73b97c",
      "#73b97c",
      "#73b97c",
      "#73b97c",
      "#73b97c",
      "#73b97c",
      "#007a2f",
      "#007a2f",
      "#73b97c",
      "#73b97c",
      "#73b97c",
      "#73b97c",
      "#73b97c",
      "#73b97c",
      "#73b97c"
    ],
    "xAxis": {
      "type": "category",
      "labels": {
        padding: 1,
        step: 1,
        y: 3,
        x: -10,
        "style": {
          "color": "#000000",
          "fontSize": "9px"
        }
      }
    },
    "yAxis": {
      tickAmount: 6,
      "labels": {
        y: 12,
        "formatter": function () {
          return Highcharts.numberFormat((this.value), 0);
        }
      }
    },
    "legend": {
      "enabled": false
    },
    "chart": {
      //"marginBottom": 65,
      //"marginTop": 75,
      marginRight: 7,
      "type": "column",
      "inverted": true
    }
  };
}());
