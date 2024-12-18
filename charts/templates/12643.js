(function () {
  return {
    chart: {
      marginRight: 20
    },
    "xAxis": {
      tickInterval: 1
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}%"
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>'
    },
    "series": [
      {
        "color": "#67401E"
      }, /* dunkelrot */
      {
        "color": "#C4AB91",
        visible: true,
      }, /* dunkelgrün */
      {
        "color": "#67401E", dashStyle: 'shortDash' /*"#8A8A8A" Stadt Basel*/,
      },
      {
        "color": "#C4AB91", dashStyle: 'shortDash' /*"#8A8A8A" Stadt Basel*/,
      },
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
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
