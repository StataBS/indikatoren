(function () {
  return {
    "chart": {
      type: "column",
      "inverted": false,
      "width": 665,
      marginTop: 7
    },
    plotOptions: {
      series: {
        "stacking": "normal",
        pointWidth: 30,
        groupPadding: 0,
      }
    },
    "yAxis": {
      max: 200000,
      tickInterval: 50000,
      "labels": {
        "format": "{value:,.0f}",
      }
    },
    "xAxis": {
      "type": "category",
      "tickInterval": 1,
      "labels": {
        step: 1,
        //"rotation": 0,
        "rotation": -0,
      }
    },
    "legend": {
      enabled: true,
      "layout": "vertical",
      "verticalAlign": "middle",
      "itemMarginBottom": 5,
      "align": "right",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "series": [
      { "color": "#007a2f", "index": 8, "legendIndex": 8 }, /*grün dunkel2*/
      { "color": "#44ab2b", "index": 7, "legendIndex": 7 }, /*grün mittel*/
      { "color": "#73ba7c", "index": 6, "legendIndex": 6 }, /*grün dunkel1*/
      { "color": "#d7e9d2", "index": 5, "legendIndex": 5 }, /*grün hell*/
      { "color": "#b9cfd7", "index": 4, "legendIndex": 4 }, /*blau hell */
      { "color": "#71a3b5", "index": 3, "legendIndex": 3 }, /*blau dunkel */
      { "color": "#ffbb58", "index": 2, "legendIndex": 2 }, /*orange hell */
      { "color": "#ff8028", "index": 1, "legendIndex": 1 }, /*orange dunkel */
      { "color": "#b00000", "index": 0, "legendIndex": 0 } /*rot dunkel */
    ],
    "tooltip": {
      "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    },
  };
}());





