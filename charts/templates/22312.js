(function () {
  return {
    "xAxis": {
      tickInterval: 2
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
      enabled: true,
      layout: "vertical",
      verticalAlign: "middle",
      align: "right",
      "itemMarginBottom": 6,
      labelFormatter: function () {
        return this.name.replace(" (","<br>(");
      },
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
      "width": 665
    }
  }
}());
