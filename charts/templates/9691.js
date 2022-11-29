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
        "max": 15000000,
        "tickInterval": 2500000,
     min: -1500000,
        "labels": {
          "format": "{value:,.0f}"
        } 
    },
    "series": [
        {"color": "#71a3b5", "visible": true}, /* Innenstadt*/
          {"color": "#ff8028", "visible": true}, /* Kanton BS*/
        //{"color": "#C8C8C8", "visible": true} /* grau */
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