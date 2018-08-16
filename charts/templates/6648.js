(function(){
    return {
  "xAxis": {
  	//tickInterval: 4,
  	//tickPositions: [1998, 2003, 2008, 2013, 2017],
  	tickPositions: [1998, 2001, 2004, 2007, 2010, 2013, 2017],
  	labels: {
	    rotation: -0   	  
  	}
  },
  "yAxis": {
    min: 0,
    max: 50,
  	tickInterval: 10,
  	labels: {
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