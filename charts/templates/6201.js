(function(){
    return {
"xAxis": {
    "tickInterval": 2,
  },
  "yAxis": {
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [
 	{"color": "#6F6F6F",
    "index": 1}, /*dunkelgrau BS*/
 	{"color": "#007a2f",
 	   "index": 2}, /*grün BE*/
	{"color": "#FABD24",
 	   "index": 3}, /*gelb GE*/
	{"color": "#b00000",
 	   "index": 4}, /*rot Liestal*/
	{"color": "#a0bec8",
 	   "index": 5}, /*hellblau ZH*/
	  ],
  "legend": {
    "enabled": true,
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 5,
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
  }
}
}());