(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
  },
  "yAxis": {
    "min": 0, 
    tickInterval: 15,
   // max: 50, 
	  "labels": {
		  "format": "{value}"
	  }
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>'
  },
 "series": [
  {"color": "#b00000"}, /*Schweiz*/
  {"color": "#672773"}, /*Deutschland*/
  {"color": "#007a2f"}, /*Italien*/
  {"color": "#fabd24"}, /*Türkei*/
  {"color": "#b475ab"}, /*EU-17 & EFTA*/
  {"color": "#b9cfd7"}, /*Balkan*/
  {"color": "#999999"}, /*Übrige Länder*/
  ],
   "legend": {
    "enabled": true,
    //"x": 45,
    //"y": 35,
    "itemWidth": 180,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "plotOptions": {
    "line": {
      "marker":{
        "enabled": false,
        "symbol": "circle",
      } 
    }
  }
}
}());