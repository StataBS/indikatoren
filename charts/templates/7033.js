(function () {
  return {
    "xAxis": {
      "tickInterval": 4,
      "type": "category",
      labels: {
        x: 11,
        rotation: 0,
        "formatter": function () {
          return this.value.split("-").slice(0, -1);
        },
      }
    },
    "yAxis": {
      tickAmount: 5,
      "labels": {
        "format": "{value:,.0f}",
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
    },
    "series": [
      { "color": "#B375AB" },
      { "color": "#662673" },
    ],
    "legend": {
      width: 380,
      itemWidth: 175,
      itemDistance: 0,
      "enabled": true,
      //"y": 45,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal",
        textOverflow: "none"
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