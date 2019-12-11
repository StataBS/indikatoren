(function () {
  return {
    "chart": {
      spacing: [5, 2, 2, 2]
    },
    "yAxis": {
      tickAmount: 6,
      "labels": {
        "format": "{value:,.0f}%",
      }
    },
    "xAxis": {
      "tickInterval": 2
    },
    "series": [
      {
        "marker": {
          "symbol": "circle",
          "enabled": false
        },
        "color": "#83522E"
      }
    ],
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>'
    }
  }
}());
