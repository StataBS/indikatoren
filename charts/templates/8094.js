(function () {
  return {
    "chart": {
      "type": "column",
      "spacingBottom": 30
    },
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
      }
    },
    "xAxis": {
      "type": "category",
    },
    "yAxis": {
      "tickInterval": 20,
      plotLines: [{
        color: '#B9CFD7',
        value: 0, 
        //width: 2 
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
      "align": "left",
      //itemWidth: 200,
    },
    tooltip: {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>',
    },
  }
}());