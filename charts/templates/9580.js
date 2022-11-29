(function () {
  return {
    "chart": {
      //"marginBottom": 75,
      //"marginTop": 75,
      "type": "column"
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
        style: {
          fontSize: "11px"
        },
        formatter: function () {
          return this.value.replace('Kleinhüningen', 'Kleinh.');
        }
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
      reversed: true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      padding: 0,
      itemDistance: 2,
      width: 500,
      itemWidth: 230,
      reversed: false,
      itemMarginBottom: 1
    },
    "series": [
      { "color": "#8B2223", index: 12, legendIndex: 0 }, /*dunkelrot*/
      { "color": "#DC440E", index: 11, legendIndex: 1 }, /*hellrot*/
      { "color": "#FF8028", index: 10, legendIndex: 2 }, /*dunkelorange*/
      { "color": "#FFBB58", index: 9, legendIndex: 3 }, /*dunkelgelb*/
      { "color": "#FFDA80", index: 8, legendIndex: 4 }, /*hellgelb*/
      { "color": "#007A2F", index: 7, legendIndex: 5 }, /*dunkelgrün*/
      { "color": "#D7E8D2", index: 6, legendIndex: 6 }, /*hellgrün1*/
      { "color": "#73BA7C", index: 5, legendIndex: 7 }, /*hellgrün2*/
      { "color": "#2B0099", index: 4, legendIndex: 8 }, /*dunkelblau1*/
      { "color": "#008AC3", index: 3, legendIndex: 9 }, /*dunkelblau2*/
      { "color": "#B9CFD7", index: 2, legendIndex: 10 }, /*hellblau*/

    ],
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
      "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
      "shared": true
    },
  }
}());
