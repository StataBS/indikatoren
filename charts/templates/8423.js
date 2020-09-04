(function () {
  return {
    chart: {
      marginRight: 10
    },
    "yAxis": {
      min: null,
      tickInterval: 5,
      "labels": {
        "format": "{value:,.0f}",
      },
      plotLines: [{
        value: 100,
        color: '#B9CFD7',
        width: 2
      }]
    },
    "xAxis": {
      "tickInterval": 3,
    },
    "series": [
      {
        "color": "#8b2223"
      }
    ],
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
      "shared": false
    }
  }
}());

