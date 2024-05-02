(function () {
  return {
    "chart": {
      //"marginBottom": 75,
      //"marginTop": 75,
      "type": "column",
      spacingBottom: 45,
    },
    "plotOptions": {
      "series": {
        stacking: "normal",
        //groupPadding: 0.1,
      }
    },
    xAxis: {
      type: "category",
      tickInterval: 1,
      labels: {
        step: 1,
       // rotation: -45,
      }
    },
    "yAxis": {
      tickInterval: 1000,
      "labels": {
        "format": "{value:,.0f}"
      },
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      reversed: false,
      width: 500,
      padding: 0,
      itemWidth: 230,
      itemDistance: 2,
      itemMarginBottom: 5
    },
    "series": [
      { "color": "#999999", index: 13, legendIndex: 5 }, 
      { "color": "#662673", index: 12, legendIndex: 1 }, 
      { "color": "#B375AB", index: 11, legendIndex: 2 }, 
     // { "color": "#E7CEE2", index: 10, legendIndex: 3 }, 
      { "color": "#FF8028", index: 9, legendIndex: 4 }, 

    ],
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
      "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
      "shared": true
    },
  }
}());
