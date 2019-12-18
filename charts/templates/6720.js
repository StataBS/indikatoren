(function () {
  return {
    chart: {
      marginTop: 5
    },
    "xAxis": {
      "tickInterval": 2,
      labels: {
        rotation: -45
      }
    },
    "yAxis": {
      "min": 0,
      max: 80,
      tickInterval: 20,
    },
    "series": [
      { "color": "#672773" }, /*Deutschland*/
      { "color": "#007a2f" }, /*Italien*/
      { "color": "#fabd24" }, /*Türkei*/
      { "color": "#b475ab" }, /*EU-17 & EFTA*/
      { "color": "#71a3b5" }, /*EU-Ost */
      { "color": "#b9cfd7" }, /*Balkan*/
      { "color": "#ff8028" }, /*Mittel- & Südamerika */
      { "color": "#73ba7c" }, /*Arabische Länder */
      { "color": "#9f7c5a" }, /*Afrikanische Länder*/
      { "color": "#999999" }, /*Übrige Länder*/
    ],
    "legend": {
      "enabled": true,
      //"layout": "vertical",
      //"verticalAlign": "top",
      //"align": "left",
      itemMarginBottom: 4,
      labelFormatter: function () {
        return this.name.replace(" ", "<br>").replace("<br>und", " u.<br>").replace("<br>+", " +").replace("Übrige<br>", "Übrige ");
      },
    }
  }
}());