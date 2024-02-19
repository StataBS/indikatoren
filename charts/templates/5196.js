(function () {
  return {
    "yAxis": {
      min: null,
      "labels": {
        "format": "{value:,.0f}",
      }
    },
    "xAxis": {
      "tickInterval": 3,
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
      {"color": "#8b2223"},
      {"color": "#CD9C00"},
    ],
  }
}());
