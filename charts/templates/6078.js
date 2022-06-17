(function () {
  return {
    "xAxis": {
      "tickInterval": 2,
    },
    "yAxis": {
      "min": 0,
      //tickInterval: 10,
      max: 40,
      "labels": {
        "format": "{value}"
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>'
    },
    "series": [
      { "color": "#b00000" , legendIndex: 1}, /*Schweiz*/
      { "color": "#672773" , legendIndex: 4}, /*Deutschland*/
      { "color": "#007a2f" , legendIndex: 7}, /*Italien*/
      { "color": "#fabd24" , legendIndex: 10}, /*Türkei*/
      { "color": "#b475ab" , legendIndex: 3}, /*EU-17 & EFTA*/
      { "color": "#71a3b5", legendIndex: 2}, /*EU-Ost */
      { "color": "#b9cfd7" , legendIndex: 5}, /*Balkan*/
      { "color": "#ff8028" , legendIndex: 6}, /*Mittel- & Südamerika */
      { "color": "#73ba7c" , legendIndex: 8}, /*Arabische Länder */
      { "color": "#9f7c5a" , legendIndex: 11}, /*Afrikanische Länder*/
      { "color": "#999999" , legendIndex: 9}, /*Übrige Länder*/
    ],
    legend: {
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      y: -10,
      itemMarginBottom: 3,
      itemDistance: 5,
      itemWidth: 140,
      itemStyle: {
        textOverflow: "none",
        whiteSpace: "nowrap"
      }
    },
    "plotOptions": {
      "line": {
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    }
  }
}());