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
    {"color": "#6F6F6F",
    legendIndex: 1,
      "marker": {
        "enabled": false
      }    
    }, /* dunkelrot */
    	{"color": "#007A2F",
    	legendIndex: 3,
	visible:true,
      "marker": {
        "enabled": false
      }    
    }, /* dunkelgrün */
    	{"color": "#2B0099",
    	legendIndex: 5,
	visible:true,
      "marker": {
        "enabled": false
      }    
    }, /* dunkelblau */
    	{"color": "#B00000",
    	legendIndex: 7,
	visible:true,
      "marker": {
        "enabled": false
      }    
    }, /* dunkelviolett */
       {"color": "#C8C8C8",
       visible: false,
       legendIndex: 2,
      "marker": {
        "enabled": false
      }    
    }, /* hellrot */
    	{"color": "#73B97C",
    	legendIndex: 4,
	visible:false,
      "marker": {
        "enabled": false
      }    
    }, /* hellgrün */
    	{"color": "#008AC3",
    	legendIndex: 6,
	visible:false,
      "marker": {
        "enabled": false
      }    
    }, /* hellblau */
    	{"color": "#FF8028",
    	legendIndex: 8,
	visible:false,
      "marker": {
        "enabled": false
      }    
    }, /* hellviolett */
  ],
  "legend": {
    "enabled": true,
    //"x": 45,
    //"y": 35
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
 