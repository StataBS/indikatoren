(function () {
  return {
    "xAxis": {tickInterval: 1
    },
    "yAxis": {
      "tickInterval": 100,
      "labels": {
        "format": "{value:,.0f}",
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    },
    "series": [
      { color: "#083038" },
      { color: "#689199" },
      { color: "#FFBB58" },
      { color: "#68AB2B" },
      { color: "#6F6F6F" }
    ],
    "legend": {
      itemWidth: 300,
      "enabled": true,
      //"y": 45,
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
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    }
  }
}());