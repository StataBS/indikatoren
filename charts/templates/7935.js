/*  
global Highcharts
*/

(function () {
  return {
    "chart": {
      //"marginBottom": 65,
      //"marginTop": 75,
      "type": "column",
      "inverted": true
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
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((100 * this.y), 1) + '%</b><br/>';
          }
        }
      },
      {
        "index": 1,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function () {
            return '(95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((100 * this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((100 * this.high), 1) + '%</b>)<br/>';
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
      "#007a2f",
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
      "#73b97c"
    ],
    "xAxis": {
      "type": "category",
      "labels": {
        padding: 1,
        step: 1,
        y: 3,
        "style": {
          "color": "#000000",
          "fontSize": "9px"
        }
      }
    },
    "yAxis": {
      "labels": {
        y: 10,
        "formatter": function () {
          return Highcharts.numberFormat((100 * this.value), 0) + '%';
        }
      }
    },
    "legend": {
      "enabled": false
    },
    "chart": {
      //"marginBottom": 65,
      //"marginTop": 75,
      //spacing: [2,2,2,2],
      "type": "column",
      "inverted": true
    }
  };
}());
