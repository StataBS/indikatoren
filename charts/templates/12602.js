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
        borderWidth: 0,
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
      //tickInterval: 1000,
      max: 100,
      "labels": {
        "format": "{value:,.0f}"
      },
    },
    "legend": {
      "enabled": false,
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
     
      { "color": "#B375AB"},
      

    ],
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
     // "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
      "shared": true
    },
  }
}());
