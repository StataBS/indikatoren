(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
  },
  "yAxis": {
    tickAmount: 6,
  	"labels": {
  		"format": "{value:,.0f}", 
  		x: -10
  	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [
 	{"color": "#6F6F6F",}, /*dunkelgrau BS*/
 	{"color": "#007a2f",}, /*grün BE*/
	{"color": "#FABD24",}, /*orange GE*/
	{"color": "#b00000",}, /*rot Liestal*/
	{"color": "#a0bec8",}, /*dunkelblau ZH*/
  ],
  "legend": {
    "enabled": true,
    itemDistance: 7,
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
  }
}
}());