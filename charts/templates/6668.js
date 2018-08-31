(function(){
    return {
  "xAxis": {
  	tickInterval: 1,
  	labels:{
  		rotation: -45,
  		step: 1,
  	}
  },
  "yAxis": {
    tickAmount: 7,
	  "labels": {
		  "format": "{value}%"
	  }
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b>%<br/>'
  },
 "series": [
  {"color": "#b00000", legendIndex: 0}, /*Schweiz*/
  {"color": "#661200", legendIndex: 2, dashStyle: 'LongDash'}, /*Schweizer*/
  {"color": "#dc440e", legendIndex: 4, dashStyle: 'LongDash'}, /*Schwezerinnen*/
  {"color": "#cd9c00", legendIndex: 1}, /*Ausland*/
  {"color": "#7f5f1a", legendIndex: 2, dashStyle: 'LongDash'}, /*Ausländer*/
  {"color": "#ffda80", legendIndex: 5, dashStyle: 'LongDash'}, /*Ausländerinnnen*/
  ],
   "legend": {
    "enabled": true,
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
  }
};
}());