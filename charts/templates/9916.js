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
      tickInterval: 500,
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
      { "color": "#8B2223", index: 12, legendIndex: 0 }, /*dunkelrot*/
      { "color": "#DC440E", index: 11, legendIndex: 1 }, /*hellrot*/
      { "color": "#FF8028", index: 10, legendIndex: 2 }, /*dunkelorange*/
      { "color": "#FFBB58", index: 9, legendIndex: 3 }, /*dunkelgelb*/

    ],
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
      "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
      "shared": true
    },
  }
}());
