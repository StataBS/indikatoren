(function () {
  return {
    chart: {
    //  marginTop: 5
    },
    "xAxis": {
      "tickInterval": 1,
      labels: {
        rotation: 0
      }
    },
    "yAxis": {
      "min": 0,
      max: 40,
      tickInterval: 10,
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
      "layout": "horizontal",
      "verticalAlign": "top",
      padding: 1,
      "align": "left",
      itemWidth: 130,
    width: 299,
    itemStyle: {
      textOverflow: "none",
      whiteSpace: "nowrap"
    },
       labelFormatter: function(){
        return this.name.replace("&", "u.");
      },
        
    }
  }
}());