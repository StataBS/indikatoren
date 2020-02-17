(function () {
  return {
    "xAxis": {
      tickInterval: 1,
      labels: {
        step: 1,
        rotation: -45
      }
    },
    "yAxis": {
      tickInterval: 500,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
    },
    series: [
      {
        color: "#B00000",
      },
      {
        color: "#B00000",
        linkedTo: ":previous"
      },
      {
        color: "#4f81bd",
      },
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
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
  };
}());
