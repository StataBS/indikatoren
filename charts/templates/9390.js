(function () {
  return {
    "xAxis": {

    },
    "yAxis": {
      tickInterval: 10,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .0f}</b><br/>'
    },
    "series": [
      {
        "color": "#007a2f"
      },
      {
        "color": "#2f656b"
      },
      {
        "color": "#923f8d"
      },
      {
        "color": "#990300"
      },
      {
        "color": "#73b97c"
      },
      {
        "color": "#fabd24"
      },

    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 3,
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
    },
    chart: {
      marginRight: 20
    }
  }
}());
