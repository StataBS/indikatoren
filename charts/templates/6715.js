(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
  },
  "yAxis": {
    "min": 0, 
    tickInterval: 1,
	  "labels": {
		  "format": "{value}%"
	  }
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b>%<br/>'
  },
 "series": [
  {"color": "#b00000"}, /**/
  {"color": "#b475ab"}, /**/
  {"color": "#cd9c00"}, /**/
  {"color": "#083038"}, /**/
  ],
   "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 1,
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
};
}());