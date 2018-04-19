(function(){
    return {
 "xAxis": {
    "tickInterval": 1,
  },
  "yAxis": {
  	tickInterval: 25000,
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
	"marker": {
        "enabled": true
    }}, /*BS*/
 	{"color": "#FF8028"}, /*BL*/
 	{"color": "#A8C3CA"}, /*AG*/
	{"color": "#008AC3"}, /*ZH*/
	{"color": "#990300"}, /*CH*/
	  ],
  "legend": {
    "enabled": true,
    "x": 45,
    //"y": 55,
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
  },
 "chart": {  
    	marginRight: 18,
   }
}
}());