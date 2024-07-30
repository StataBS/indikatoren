(function () {
  return {
    "xAxis": {
      "tickInterval": 2
    },
    "yAxis": {
      tickInterval: 25000,
      //max: 200000,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
    },
    "series": [ /*Aargau	Basel-Landschaft	Basel-Stadt	Bern	Genf	Zug	Zürich	Schweiz */
      { "color": "#2b0099" }, 
      { "color": "#ff8028" },
      { "color": "#474747" },  
      { "color": "#44ab2b" }, 
      { "color": "#fabd24" }, 
      { "color": "#a0bec8" },  
      { "color": "#008ac3" },  
      { "color": "#000000" },  
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
    }
  }
}());
