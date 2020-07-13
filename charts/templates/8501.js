(function () {
  return {
    "plotOptions": {
      "series": {
        pointPadding: 0.1,
        "dataLabels": {
          "style": {
            "fontSize": "10px"
          }
        }
      },
    },
    "xAxis": {
      "type": "category",
      labels: {
        rotation: 0,
      }
    },
    "yAxis": {
      plotLines: [{
        color: '#B9CFD7',
        value: 0,
        width: 1
      }],
      tickAmount: 5,
      tickInterval: 0.01,
      "labels": {
        "formatter": function () {
          return Highcharts.numberFormat((this.value * 100), 0) + '%';
        }
      }
    },
    "series": [
      {
        "color": "#246370"
      },

    ],
    "legend": {
      "enabled": false,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    tooltip: {
      "pointFormatter": function () {
        return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y * 100), 1) + '% </b><br/><b>';
      },
      shared: false
    },
    "chart": {
      "type": "column",
      "marginBottom": 35,

    }
  }
}());
