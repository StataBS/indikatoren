(function () {
  return {
    "xAxis": {
      tickInterval: 1,
      type: 'category',
      endOnTick: false,
      "labels": {
        step: 1,
        "rotation": -45,
      }
    },
    "yAxis": [{
      gridLineColor: '#B9CFD7',
      gridLineWidth: 0.5,
      "title": {
        "style": {
          "color": "#000000",
          "fontSize": null
        },
        "text": null
      },
      "labels": {
        x: 7,
        "formatter": function () {
          return Highcharts.numberFormat((this.value * 100), 0) + '%';
        },
        "style": {
          "color": "#000000"
        }
      },
      "min": 0,
      opposite: true,
      tickInterval: 0.25,
      tickAmount: 5,
      max: 1.0,
    },
    {
      gridLineColor: '#B9CFD7',
      gridLineWidth: 0.5,
      "title": {
        "style": {
          "color": "#000000",
          "fontSize": null
        },
        "text": null
      },
      "labels": {
        x: -7,
        "formatter": function () {
          return Highcharts.numberFormat((this.value), 0) + ' Fr.';
        },

        "style": {
          "color": "#000000"
        }
      },
      "min": 0,
      tickInterval: 2000,
      max: 7500,
      tickAmount: 5,
      "opposite": false
    }
    ],
    "series": [
      {
        "color": "#fabd24", // 
        "yAxis": 0,
        index: 2,
        legendIndex: 2,
        "tooltip": {
          "shared": false,
          "pointFormatter":
            function () {
              return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y * 100), 1) + '% </b><br/><b>'
            }
        },

      }, /* rot */
      {
        "color": "#DC440E", // Frauen
        "type": "column",
        "yAxis": 1,
        index: 1,
        legendIndex: 1,
        "tooltip": {
          "shared": false,
          "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f} Fr.</b><br/>'
        },
      },
      {
        "color": "#008AC3", // Männer
        "type": "column",
        "yAxis": 1,
        index: 0,
        legendIndex: 2,
        "tooltip": {
          "shared": false,
          "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f} Fr.</b><br/>'
        },
      },
    ],
    "legend": {
      "enabled": true,
      //"x": 1,
      //"y": 30,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      "itemStyle": {
        width: 300
      },
      labelFormatter: function () {
        return this.name.replace("Lohnunterschied zwischen Frauen und Männern", "Lohnunterschied Frauen / Männer");
      }
    },
    "plotOptions": {
      "line": {
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      },
      "column": {
        pointPadding: 0,
        groupPadding: 0.1,
        borderWidth: 0,

      },
    },

  }
}());