(function () {
  return {
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
        "color": "#cd9c00",
        legendIndex: 1
      },
      {
        "color": "#b375ab",
        legendIndex: 3
      },
      {
        "color": "#cd9c00",
        legendIndex: 2,
        dashStyle: "ShortDash"
      },
      {
        "color": "#b375ab",
        legendIndex: 4,
        dashStyle: "ShortDash"
      },
      {
        "color": "#999",
        legendIndex: 5
      },
      {
        "color": "#999",
        legendIndex: 6,
        dashStyle: "ShortDash"
      }
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
