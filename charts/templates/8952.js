(function () {
  return {
    chart: {
      marginRight: 20,
      marginTop: 60
    },
    "yAxis": {
      min: 0,
      max: 100,
      tickInterval: 25,
      "labels": {
        "format": "{value:,.0f}%",
      }
    },
    "xAxis": {
      "tickInterval": 2
    },
    legend: {
      enabled: false,
    },
    "series": [
      {
        "marker": {
          "symbol": "circle",
          "enabled": false
        },
        "color": "#73B97C"
      }
    ],
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>'
    }
  }
}());
