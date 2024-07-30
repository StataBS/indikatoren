(function () {
  return {
    "xAxis": {
      "tickInterval": 1,
    },
    "yAxis": {
      tickInterval: 0.5,
      "labels": {
        "format": "{value:,.1f}%"
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>'
    },
    "series": [
      {
        "color": "#007A2F",
        visible: true,
      }, /* dunkelgrün */
    ],
    "legend": {
      "enabled": false,
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
        "connectNulls": true,
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    }
  }
}());
