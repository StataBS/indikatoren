(function () {
  return {
    "yAxis": {
      "tickInterval": 50,
      "labels": {
        "format": "{value:,.0f}",
      }
    },
    "xAxis": {
      "tickInterval": 2,
    },
    "series": [
      {
        "color": "#b375ab"
      }
    ],
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
      "shared": false
    },
  };
}());

