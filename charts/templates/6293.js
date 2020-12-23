/*
global Highcharts
*/

(function () {
  return {
    "xAxis": {
      tickPositioner: function () {
        var interval = 2,
          ext = this.getExtremes(),
          i = ext.dataMax,
          pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      },
      "tickInterval": 2,
      showLastLabel: true,
      labels: {
        rotation: -45
      },
    },
    "yAxis": {
      "labels": {
        formatter: function () {
          return Highcharts.numberFormat((this.value * 100), 1) + '%';
        }
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormatter": function () {
        return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y * 100), 1) + '% </b><br/><b>';
      },

    },
    "series": [
      {
        "color": "#3C3C3C",
        legendIndex: 0,
      }, /* grün */
      {
        "color": "#008AC3",
        legendIndex: 2,
      }, /* blau */
      {
        "color": "#68AB2B",
        legendIndex: 1,
      }, /* schwarz */
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      itemDistance: 18,
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "plotOptions": {
      "line": {
        "connectNulls": true,
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    }
  }
}());
