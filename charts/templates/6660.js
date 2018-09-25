(function(){
    return {
  "xAxis": {
    //"tickInterval": 3,
    tickPositions: [1998, 2001, 2004, 2007, 2010, 2013, 2017]
  },
  "yAxis": {
    "min": 0, 
    tickAmount: 5,
	  "labels": {
		  "format": "{value}%"
	  }
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'
  },
 "series": [
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
    "layout": "horizontal",
    "verticalAlign": "top",
    padding: 1,
    itemDistance: 15,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    },
    labelFormatter: function(){
		    return this.name.replace("und", "u.");
		  },

  },
  "plotOptions": {
    "line": {
      "marker":{
        "enabled": false,
        "symbol": "circle",
      } 
    }
  }
};
}());