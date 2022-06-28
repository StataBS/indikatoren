(function () {
  return {
    chart: {
      marginRight: 10
    },
    "xAxis": {
      tickInterval: 1,
      labels: {
        rotation: 0
      }
    },
    "yAxis": {
      tickAmount: 5,
      "labels": {
        "format": "{value}%"
      }
    },
    "series": [
      { "color": "#b00000" }, /*Schweiz*/
      { "color": "#672773" }, /*Deutschland*/
      { "color": "#007a2f" }, /*Italien*/
      { "color": "#fabd24" }, /*Türkei*/
      { "color": "#b475ab" }, /*EU-17 & EFTA*/
      { "color": "#71a3b5" }, /*EU-Ost */
      { "color": "#b9cfd7" }, /*Balkan*/
      { "color": "#999999" }, /*Übrige Länder*/
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      padding: 1,
      itemDistance: 8,
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      },
      labelFormatter: function () {
        return this.name.replace("und", "u.");
      },

    },
  };
}());