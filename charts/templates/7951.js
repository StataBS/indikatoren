(function () {
  return {
    "chart": {
      "type": "column"
    },
    plotOptions: {
      series: {
        pointPadding: 0,
      }
    },
    xAxis:{
      "tickInterval": 1
    },
    "yAxis": {
      "tickInterval": 100,
      max: 500,
      "labels": {
        "format": "{value:,.0f}"
      },
      plotLines: [{
        color: '#B9CFD7',
        value: 0, 
        width: 1 
      }]
    },
    "series": [
      {
        "color": "#cd9c00"
      },
      {
        "color": "#b375ab"
      }
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left"
    }
  }
}());