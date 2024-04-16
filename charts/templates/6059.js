(function () {
  return {
    "chart": {
      //"marginBottom": 75,
      //"marginTop": 75,
      "type": "column",
    },
     "plotOptions": {
      "series": {
        //pointPadding: 100,
        borderWidth: 0,
        //"pointWidth": 10,
        "stacking": "normal"
      }
    },
    "xAxis": {
      min: 0,
      "type": "category",
      "tickInterval": 1
    },
    "yAxis": {
      max: 80000,
      tickInterval: 20000,
      "labels": {
        "format": "{value:,.0f}",
      },
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      //"y": 20,
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
      "footerFormat": '<span style="color:none">\u25CF</span> Total: <b>{point.total:,.0f}</b>',
      "shared": false
    },
    "series": [
      { "color": "#672773", index: 9, legendIndex: 0 }, /*Deutschland*/
      { "color": "#007a2f", index: 8, legendIndex: 1 }, /*Italien*/
      { "color": "#fabd24", index: 7, legendIndex: 2 }, /*Türkei*/
      { "color": "#b475ab", index: 6, legendIndex: 3 }, /*EU-17 & EFTA*/
      { "color": "#71a3b5", index: 5, legendIndex: 4 }, /*EU-Ost */
      { "color": "#b9cfd7", index: 4, legendIndex: 5 }, /*Balkan*/
      { "color": "#ff8028", index: 3, legendIndex: 6 }, /*Mittel- & Südamerika */
      { "color": "#73ba7c", index: 2, legendIndex: 7 }, /*Arabische Länder */
      { "color": "#9f7c5a", index: 1, legendIndex: 8 }, /*Afrikanische Länder*/
      { "color": "#999999", index: 0, legendIndex: 9 }, /*Übrige Länder*/
    ],
   
  }
}());
