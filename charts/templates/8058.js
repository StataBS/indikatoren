(function () {
  return {
    "xAxis": {
      tickInterval: 1
    },
    "yAxis": {
      tickInterval: 10000,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f} Fr.</b><br/>'
    },
    "series": [
      {
        "color": "#cd9c00"
      },
      {
        "color": "#cd9c00",
        dashStyle: "ShortDash"
      },
      {
        "color": "#b375ab"
      },
      {
        "color": "#b375ab",
        dashStyle: "ShortDash"
      },
      {
        "color": "#999",
        visible: false
      },
      {
        "color": "#999",
        dashStyle: "ShortDash",
        visible: false
      },
    ],
    "legend": {
      enabled: true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left"
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
