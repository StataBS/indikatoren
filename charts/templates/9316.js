(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
  },
  "yAxis": {
    "min": 0, 
    tickAmount: 8,
	  "labels": {
		  "format": "{value:,.0f}",
	  }
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [
  {"color":  "#008AC3"}, /**/
  {"color": "#689199"}, /**/
  {"color": "#FABD24"}, /**/
  {"color": "#B00000"}, /**/
  {"color": "#DC440E"}, /**/
  ],
   "legend": {
    "enabled": true,
    itemDistance: 5, 
    "layout": "horizontal",
    "verticalAlign": "top",
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
  },
  chart:{
    width: 662, 
  	height: 208,
  }
}
}());