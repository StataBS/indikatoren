(function(){
    return {
  "xAxis": {
    "tickInterval": 2
  },
  "yAxis": {
  	min: 75,
  	max: 150,
  	tickInterval: 25,
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
  },
  "series": [
    {"color": "#B00000",
    legendIndex: 1,
      "marker": {
        "enabled": true
      }    
    }, /* dunkelrot */
    	{"color": "#007A2F",
    	legendIndex: 3,
	visible:true,
      "marker": {
        "enabled": true
      }    
    }, /* dunkelgrün */
    	{"color": "#4f81bd",
    	legendIndex: 5,
	visible:true,
      "marker": {
        "enabled": true
      }    
    }, /* dunkelblau */
    	{"color": "#2B0099",
    	legendIndex: 7,
	visible:true,
      "marker": {
        "enabled": true
      }    
    }, /* dunkelviolett */
       {"color": "#E64900",
       visible: false,
       legendIndex: 2,
      "marker": {
        "enabled": true
      }    
    }, /* hellrot */
    	{"color": "#68AB2B",
    	legendIndex: 4,
	visible:false,
      "marker": {
        "enabled": true
      }    
    }, /* hellgrün */
    	{"color": "#008AC3",
    	legendIndex: 6,
	visible:false,
      "marker": {
        "enabled": true
      }    
    }, /* hellblau */
    	{"color": "#B375AB",
    	legendIndex: 8,
	visible:false,
      "marker": {
        "enabled": true
      }    
    }, /* hellviolett */
  ],
  "legend": {
    "enabled": true,
    //"x": 45,
    "y": 35,
    "itemWidth": 200,
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
      }
    }
  }
}
}());
 