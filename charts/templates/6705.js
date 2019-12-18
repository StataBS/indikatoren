(function () {
  return {
    chart: {
      width: 665,
      spacingTop: 5,
    },
    "xAxis": {
      "tickInterval": 1,
      labels: {
        //step: 1,
        rotation: -45,
      },
    },
    "yAxis": {
      "min": 0,
      tickAmount: 5,
      "labels": {
        "format": "{value}%",
        x: -5
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b>%<br/>'
    },
    "series": [
      { "color": "#b00000" }, /*Schweiz*/
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
      //"layout": "horizontal",
      //"verticalAlign": "top",
      //"align": "left",
      itemMarginBottom: 5,
      labelFormatter: function () {
        return this.name.replace("und", " u.");
        //return this.name.replace(" ", "<br>").replace("<br>und", " u.<br>").replace("<br>+", " +").replace("Übrige<br>", "Übrige ");
      },
    },
    "plotOptions": {
      "line": {
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    }
  };
}());