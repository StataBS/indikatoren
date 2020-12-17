
(function () {
  return {
    "chart": {
      "type": "column",
      "inverted": true,
      marginRight: 15,
      marginLeft: 117
      //spacing: [15,3,8,3] /*top, right, bottom and left */	
    },
    "plotOptions": {
      "column": {
        "colorByPoint": true
      }
    },
    "xAxis": {
      tickInterval: 1,
      "type": "category",
      "labels": {
        x: -5,
        y: 3,
        formatter: function () {
          return this.value.replace("und", "u.");
        }
      }
    },
    "yAxis": {
      "max": 100,
      tickInterval: 20,
      "labels": {
        y: 15,
        "format": "{value:,.0f}%"
      }
    },
    series: [{
      name: 'Ländergruppe'
    }],
    "colors": [
      "#b00000", /*Schweiz*/
      "#672773", /*Deutschland*/
      "#007a2f", /*Italien*/
      "#fabd24", /*Türkei*/
      "#b475ab", /*EU-17 & EFTA*/
      "#71a3b5", /*EU-Ost */
      "#b9cfd7", /*Balkan*/
      "#ff8028", /*Mittel- & Südamerika */
      "#73ba7c", /*Arabische Länder */
      "#9f7c5a", /*Afrikanische Länder*/
      "#999999", /*Übrige Länder*/
    ],
    "legend": {
      "enabled": false
    },
  }
}());



