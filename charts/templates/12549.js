(function () {
  return {
    "yAxis": {
      min: null,
      "labels": {
        "format": "{value:,.0f}",
      }
    },
    "xAxis": {
      "tickInterval": 4,
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
    yAxis:{
      tickInterval: 50
    },
    legend: {
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
    },
    tooltip: {
      valueDecimals: 1,
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
    },
    "series": [
      {"color": "#B00000"},
      {"color": "#246370"},
    ],
  }
}());
