(function () {
  return {
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
        //itemWidth: 10, 

      }
    },
    "xAxis": {
      "type": "category",
      "labels": {
        "rotation": 0
      }
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}",
      }
    },
    "series": [
      { "color": "#474747" },
      { "color": "#FF8028" },
      { "color": "#FABD24" },
      { "color": "#B375AB" },
      { "color": "#990300" }
    ],
    "legend": {
      //itemWidth: 126,
      itemDistance: 5,
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      //"x": 25,
      //"y": 55,    
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    tooltip: {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
      "shared": false
    },
    "chart": {
      "type": "column",
      "inverted": true,
      //marginLeft: 95
      //"spacingTop": 100
    }
  }
}());