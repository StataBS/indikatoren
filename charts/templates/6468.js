(function () {
  return {
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
        itemWidth: 10,
      }
    },
    "xAxis": {
      "type": "category",
      "labels": {
        "rotation": 0
      }
    },
    "yAxis": {
      //max: 140000,
      tickInterval: 40000,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "series": [
      { "color": "#246370", "visible": true }, /* gelb*/
      { "color": "#A8C3CA", "visible": true } /* grün */
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left"
    },
    tooltip: {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
      "shared": false
    },
    "chart": {
      "type": "column",
      "inverted": true,
      marginRight: 30
      //"spacingTop": 100
    }
  }
}());