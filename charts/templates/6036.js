(function () {
  return {
    "xAxis": {
      tickInterval: 2,
      "labels": {
        x: -10
      },
      tickPositioner: function () {
        var maxlabels = 10,
          ext = this.getExtremes(),
          i = Math.round(ext.max),
          interval = Math.round((i - ext.min) / maxlabels),
          pos = [i];
        while (i >= ext.min) pos.unshift(i = i - interval);
        return pos;
      }
    },
    "yAxis": {
      tickInterval: 0.2,
      "labels": {
        "format": "{value:,.1f}"
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.3f}</b><br/>'
    },
    "series": [
      {
        "color": "#008AC3",
        "marker": {
          "enabled": false
        }
      }, /* dunkelrot */
      {
        "color": "#007A2F",
        visible: true,
        "marker": {
          "enabled": false
        }
      }, /* dunkelgrün */
    ],
    "legend": {
      "enabled": true,
      //"x": 45,
      //"y": 35,
      //"itemWidth": 120,
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
        //"connectNulls": false,
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    }
  }
}());
