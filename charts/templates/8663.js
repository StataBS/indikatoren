(function () {
  return {
    "chart": {
      "type": "column",
      "spacingTop": 5
    },
    plotOptions: {
      series: {
        pointPadding: 0.1,
        groupPadding: 0.2
      }
    },
    "xAxis": {
      "type": "category",
    },
    "yAxis": {
      "tickInterval": 20,
      min:-120,
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
      "align": "left",
      //itemWidth: 200,
      labelFormatter: function () {
        return this.name.replace('Umzugssaldo ', '');//.replace('Klein', 'Klein-<br>');
      }
    },
    tooltip: {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>',
    },
  }
}());