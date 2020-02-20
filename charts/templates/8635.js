(function () {
  return {
    "plotOptions": {
      "line": {
        "connectNulls": true,
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    },
    xAxis: {
      tickInterval: 1
    },
    "yAxis": {
      tickInterval: 5,
      "labels": {
        "format": "{value:,.0f}%"
      }
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>'
    },
    "series": [
      {
        "color": "#999",
        "index": 3
      },
      {
        "color": "#cd9c00",
        "index": 1
      },
      {
        "color": "#b375ab",
        "index": 2
      }
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemMarginBottom": 5,
    }
  }
}());
