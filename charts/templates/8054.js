(function () {
  return {
    "chart": {
      "type": "column",
      "spacingBottom": 30
    },
    data: {
      //switchRowsAndColumns: true
    },
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
      }
    },
    "xAxis": {
      "type": "category",
      //min: 20,
      labels: {
        formatter: function () {
          return this.value.replace('Kleinhüningen', 'Kleinh.');
        }
      }
    },
    "yAxis": {
      "tickInterval": 20,
      max: 200,
      //min: -200,
    },
    "series": [
      //{"inverted": true},
      { "color": "#FFBB58", "visible": true }, /* rot*/
      { "color": "#DC440E", "visible": true }, /* blau*/
      { "color": "#A8C3CA", "visible": true }, /* blau*/
      { "color": "#246370", "visible": true }, /* blau*/
      { "color": "#083038", "visible": true }, /* schwarz */
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      //itemWidth: 300
    },
    tooltip: {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>',
      "shared": false
    }
  }
}());