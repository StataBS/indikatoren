(function () {
  return {
    "chart": {
      "type": "column",
      width: 665,
      spacingTop: 5,
      marginRight: undefined
    },
    "plotOptions": {
      "series": {
        borderWidth: 0,
        "stacking": "normal"
      }
    },
    "xAxis": {
      min: 0,
      "type": "category",
      "tickInterval": 1
    },
    "yAxis": {
      //max: 120000,
      //tickInterval: 8000,
      tickAmount: 7,
      "labels": {
        "format": "{value:,.0f}",
      }
    },
    "legend": {
      "enabled": true,
      "layout": "vertical",
      "verticalAlign": "top",
      "align": "right",
//      y: 7,
      reversed: true,
      itemMarginBottom: 5,
      "labelFormatter": function () {
        return this.name.split("(")[0].replace("und", "u."); //replace("/ ", "/<br/>");
      },
      "itemStyle": {
        "fontWeight": "normal",
        textOverflow: null,
        whitespace: 'nowrap',
      }
    },
    "series": [
      { "color": "#B00000", index: 10, legendIndex: 0 }, /*Deutschland*/
      { "color": "#672773", index: 9, legendIndex: 1 }, /*Deutschland*/
      { "color": "#007a2f", index: 8, legendIndex: 2 }, /*Italien*/
      { "color": "#fabd24", index: 7, legendIndex: 3 }, /*Türkei*/
      { "color": "#b475ab", index: 6, legendIndex: 4 }, /*EU-17 & EFTA*/
      { "color": "#71a3b5", index: 5, legendIndex: 5 }, /*EU-Ost */
      { "color": "#b9cfd7", index: 4, legendIndex: 6 }, /*Balkan*/
      { "color": "#ff8028", index: 3, legendIndex: 7 }, /*Mittel- & Südamerika */
      { "color": "#73ba7c", index: 2, legendIndex: 8 }, /*Arabische Länder */
      { "color": "#9f7c5a", index: 1, legendIndex: 9 }, /*Afrikanische Länder*/
      { "color": "#999999", index: 0, legendIndex: 10 }, /*Übrige Länder*/
    ]
  }
}());
