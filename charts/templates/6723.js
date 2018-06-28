(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
  },
  "yAxis": {
    "min": 0, 
    tickAmount: 7,
    //tickInterval: 10,
	  "labels": {
		  "format": "{value}"
	  }
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>'
  },
 "series": [
  {"color":  "#b00000"}, /*Schweiz*/
  {"color": "#672773"}, /*Deutschland*/
  {"color": "#007a2f"}, /*Italien*/
  {"color": "#fabd24"}, /*Türkei*/
  {"color": "#b475ab"}, /*EU-17 & EFTA*/
  {"color": "#71a3b5"}, /*EU-Ost */
  {"color": "#b9cfd7"}, /*Balkan*/
  {"color": "#ff8028"}, /*Mittel- & Südamerika */
  {"color": "#73ba7c"}, /*Arabische Länder */
  {"color": "#9f7c5a"}, /*Afrikanische Länder*/
  {"color": "#999999"}, /*Übrige Länder*/
  ],
   "legend": {
    "enabled": true,
    itemDistance: 5,
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 3,
    "align": "right",
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
  },
  chart:{
  	width: 665,
  	spacingTop: 5,
  	type: 'line'
  }
};
}());