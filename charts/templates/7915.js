(function () {
  return {
    "xAxis": {
      tickInterval: 1
    },
    "yAxis": {
      tickInterval: 25000,
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
        "color": "#7f5f1a",
      },
      {
        "color": "#b375ab"
      },
      {
        "color": "#923f8d"
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
