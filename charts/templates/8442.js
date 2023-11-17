(function () {
  return {
    "xAxis": {
     // tickInterval: 1000 * 60 * 60 * 24 * 365,
     // type: 'datetime',
    //  dateTimeLabelFormats: {
     //   year: '%Y'
    //  },
        "tickInterval": 12,
         "type": "category",
         labels:{
          x: 30,
              "formatter": function() {
               return this.value.split("-").slice(0, -1);
        },
         }
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}%",
      }
    },
    "tooltip": {
      xDateFormat: '%Y-%m',
      "shared": false,
      "pointFormatter": function () {
        return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '% </b>'
      },
    },
    "series": [
      { "color": "#474747" },
      { "color": "#FF8028" },
      { "color": "#FABD24" },
      { "color": "#990300" }
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "plotOptions": {
      "line": {
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    }
  }
}());