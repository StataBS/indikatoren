(function(){
    return {
  "xAxis": {
    "tickInterval": 1
  },
  "yAxis": {
    "min": undefined, 
  	"labels": {
  		"format": "{value:,.1f}"
  	}
  },	
  "tooltip": {
    "shared": false, 
	  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
  },
  "series": [
    {"color": "#ff8028"}, 
	  {"color": "#dc440e"}, 
  	{"color": "#b00000"},
    {
      color: "#661200", 
      type: "scatter",
      marker:{
        "enabled": true,
        "radius": 3
      }
    },
//    {"color": "#008AC3"},/* blau  */
  ],
  "legend": {
    "enabled": true,
    //"x": 30,
    //"y": 35,
    //"itemWidth": 150,
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
	    "connectNulls": true,
      "marker":{
        "enabled": false,
        "symbol": "circle",
        "radius": 3
      }
    }
  }
};
}());
 