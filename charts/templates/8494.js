(function () {
  return {
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
        groupPadding: 0.1
        //itemWidth: 10, 

      }
    },
    "xAxis": {
      "type": "category",
      "labels": {
        "rotation": -45
      }
    },
    "yAxis": {
      tickInterval: 1,
      tickAmount: 11,
      "labels": {
        "format": "{value:,.0f}%"
      }
    },
    "series": [
      //{ "color": "#474747" },
      //{ "color": "#FF8028" },
      //{ "color": "#FABD24" },
      { "color": "#B375AB" },
      { "color": "#990300" }
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",   
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size: 10px"> {point.key} Jahre</span><br/>',
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
      "shared": false
    },
    "chart": {
      "type": "column",
    }
  }
}());