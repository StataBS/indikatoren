(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
    labels: {
      step: 1,
      rotation: -45,
    },
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
 {"color":  "#fabd24"}, /**/
  {"color": "#b9cfd7"}, /**/
  {"color": "#007a2f"}, /**/
  {"color": "#b00000"}, /**/
  {"color": "#E7CEE2"}, /**/
  {"color": "#672773"}, /* */
  ],
   "legend": {
    "enabled": true,
    "layout": "horizontal",
    itemDistance: 0,
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