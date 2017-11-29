(function(){
    return {
  "xAxis": {
    "tickInterval": 2
  },
  "yAxis": {
    max: 8, 
    tickInterval: 2,
  	"labels": {
  		"format": "{value:,.0f}"
  	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
  "series": [
    {"color": "#008AC3",
    legendIndex: 0,
      "marker": {
        "enabled": false
      }    
    }, /* grün */
    	{"color": "#68AB2B",
	visible:true,
	legendIndex: 2,
      "marker": {
        "enabled": false
      }    
    }, /* blau */
    	{"color": "#3C3C3C",
	legendIndex: 1,
	visible:true,
      "marker": {
        "enabled": true
      }    
    }, /* scharz */
  ],
  "legend": {
    "enabled": true,
    //"x": 45,
    //"y": 35,
    "itemWidth": 200,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 3,
    margin: 3, 
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
      }
    }
  }
}
}());
 