(function(){
    return {
  "xAxis": {
  },
  "yAxis": {
	  "labels": {
		  "format": "{value}%"
	  }
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b>%<br/>'
  },
 "series": [
  {"color": "#b00000"}, /*Schweiz*/
  {"color": "#672773"}, /*Deutschland*/
  {"color": "#007a2f"}, /*Italien*/
  {"color": "#fabd24"}, /*Türkei*/
  {"color": "#b475ab"}, /*EU-17 & EFTA*/
  {"color": "#71a3b5"}, /*EU-Ost */
  {"color": "#b9cfd7"}, /*Balkan*/
  {"color": "#999999"}, /*Übrige Länder*/
  ],
   "legend": {
    "enabled": true,
    "y": 15,
    "itemWidth": 140,
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