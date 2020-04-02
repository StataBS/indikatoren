(function () {
  return {
    "xAxis": {
      type: "category",
      step: 2
      //"tickInterval": 2,
      //showLastLabel: true
    },
    "yAxis": {
      max: 60,
      tickInterval: 20,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
    },
    "series": [
      {
        "color": "#2B0099",
        "marker": {
          "enabled": false
        },
        legendIndex: 2
      }, /* duneklblau */
      {
        "color": "#68AB2B",
        visible: true,
        "marker": {
          "enabled": false
        },
        dashStyle: 'ShortDash',
        legendIndex: 3
      }, /* dunkelgrün */
      {
        "color": "#008AC3",
        "marker": {
          "enabled": false
        },
        dashStyle: 'ShortDash',
        legendIndex: 4
      }, /* duneklblau */
      {
        "color": "#007A2F",
        visible: true,
        "marker": {
          "enabled": false
        },
        legendIndex: 1
      }, /* dunkelgrün */
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      itemDistance: 10,
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
  };
}());
