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
