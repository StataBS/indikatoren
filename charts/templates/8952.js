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
      labels: {
        rotation: -45
      },
      tickPositioner: function () {
        var interval = 2,
          ext = this.getExtremes(),
          i = ext.dataMax,
          pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      }
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
