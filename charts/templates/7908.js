(function () {
  return {
    "chart": {
      "type": "column",
      width: 665,
      spacing: [5, 2, 5, 2]
    },
    "plotOptions": {
      "series": {
        stacking: "normal",
        borderWidth: 0,
        groupPadding: 0.02,
      }
    },
    xAxis: {
      type: "category",
      tickInterval: 1,
      labels: {
        step: 1,
        rotation: -45,
        //align: "left",
        formatter: function () {
          var l = this.value.replace('Messe', 'Me.');
          l = l.replace('Erlenmatt', 'Erl.');
          return l;
        }
      }
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}"
      },
      //max: 2500,
      tickInterval: 500
    },
    "legend": {
      "enabled": true,
      reversed: true,
      "layout": "vertical",
      "verticalAlign": "top",
      "align": "right",
      itemMarginBottom: 4,
      /*labelFormatter: function () {
        return this.name.replace(' Länder', '<br>Länder').replace('und', 'und<br>');
      }*/
    
      /*
            "layout": "horizontal",
            "verticalAlign": "top",
            "align": "left",
      */
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
    ]
  }
}());
