(function () {
  return {
    chart:{
      marginRight: 10
    },
    "yAxis": {
      min: 75,
      tickInterval: 5,
      "labels": {
        "format": "{value:,.0f}",
      },
      plotLines: [{
        color: '#B9CFD7',
        value: 100,
        width: 1
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
  }
}());

