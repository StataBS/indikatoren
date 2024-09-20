(function () {
  return {
    "chart": {
      width: 665,
      spacingTop: 7,
      /*marginBottom: 63*/
    },
    "xAxis": {
      type: 'category',
      //"tickInterval": 4,
      //tickPositions: [2001, 2005, 2009, 2013, 2018]
    },
    "yAxis": {
      "min": 0,
      tickAmount: 4,
      "labels": {
        "format": "{value}%"
      }
    },
    "series": [
      { "color": "#b00000" }, /*Schweiz*/
     // { color: "#b00000", linkedTo: ':previous'},
      { "color": "#672773" }, /*Deutschland*/
     // { color: "#672773", linkedTo: ':previous'},
      { "color": "#007a2f" }, /*Italien*/
     // { color: "#007a2f", linkedTo: ':previous'},
      { "color": "#fabd24" }, /*Türkei*/
     // { color: "#fabd24", linkedTo: ':previous'},
      { "color": "#b475ab" }, /*EU-17 & EFTA*/
      //{ color: "#b475ab", linkedTo: ':previous'},
      { "color": "#71a3b5" }, /*EU-Ost */
      //{ color: "#71a3b5", linkedTo: ':previous'},
      { "color": "#b9cfd7" }, /*Balkan*/
     // { color: "#b9cfd7", linkedTo: ':previous'},
      { "color": "#ff8028" }, /*Mittel- & Südamerika */
     // { color: "#ff8028", linkedTo: ':previous'},
      { "color": "#73ba7c" }, /*Arabische Länder */
     // { color: "#73ba7c", linkedTo: ':previous'},
      { "color": "#9f7c5a" }, /*Afrikanische Länder*/
      //{ color: "#9f7c5a", linkedTo: ':previous' },
      { "color": "#999999" }, /*Übrige Länder*/
     // { color: "#999999", linkedTo: ':previous' }
    ],
    "legend": {
      "enabled": true,
      itemDistance: 1,
      "layout": "vertical",
      "verticalAlign": "middle",
      //"itemMarginBottom": 5,
      "align": "right",
      labelFormatter: function () {
        return this.name.split("(")[0].replace("und", "u.");
      }
    }
  };
}());