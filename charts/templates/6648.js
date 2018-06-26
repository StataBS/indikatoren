(function(){
    return {
  "xAxis": {
  	tickInterval: 5,
  	labels: {
	    rotation: -0   	  
  	}
  },
  "yAxis": {
	tickInterval: 10,
	"labels": {
		  "format": "{value}"
	  }
  },	
  "tooltip": {
    headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y} Jahre</b><br/>'
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
   	 symbolWidth: 30,
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
  }
};
}());