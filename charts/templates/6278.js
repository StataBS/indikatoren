(function () {
  return {
    chart: {
      marginRight: 5,
    },
    "xAxis": {
      "tickInterval": 2,
      labels: {
        rotation: -45
      },
      tickPositioner: function () {
        var interval = 2,
          ext = this.getExtremes(),
          i = ext.dataMax,
          pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      }
    },
    "yAxis": {
      min: 90,
      max: 150,
      tickInterval: 10,
      "labels": {
        "format": "{value:,.0f}",
        y: 3
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
    },
    "series": [
      {
        "color": "#6F6F6F", /* dunkelgrau */
        legendIndex: 1,
        dashStyle: 'ShortDash'
      },
      {
        "color": "#007A2F", /* dunkelgrün */
        legendIndex: 3,
        dashStyle: 'ShortDash'
      },
      {
        "color": "#2B0099", /* dunkelblau */
        legendIndex: 5,
        dashStyle: 'ShortDash'
      },
      {
        "color": "#B00000", /* dunkelrot */
        legendIndex: 7,
        dashStyle: 'ShortDash'
      },
      {
        "color": "#C8C8C8", /* hellgrau */
        visible: true,
        legendIndex: 2,
        "marker": {
          "enabled": false
        }
      },
      {
        "color": "#73B97C", /* hellgrün */
        legendIndex: 4,
        "marker": {
          "enabled": false
        }
      },
      {
        "color": "#008AC3", /* hellblau */
        legendIndex: 6,
        "marker": {
          "enabled": false
        }
      },
      {
        "color": "#f66666", /* orange */
        legendIndex: 8,
        "marker": {
          "enabled": false
        }
      },
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
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
