(function(){
    return {
  "xAxis": {
    "tickInterval":2
  },
  "yAxis": {
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
  "series": [
    {"color": "#B00000",
      "marker": {
        "enabled": false
      }    
    }, /* dunkelrot */
    	{"color": "#007A2F",
	visible:true,
      "marker": {
        "enabled": false
      }    
    }, /* dunkelgrün */
    	{"color": "#4f81bd",
	visible:true,
      "marker": {
        "enabled": false
      }    
    }, /* dunkelblau */
    	{"color": "#662673",
	visible:true,
      "marker": {
        "enabled": false
      }    
    }, /* dunkelviolett */
        {"color": "#7F5F1A",
      "marker": {
        "enabled": false
      }    
    }, /* dunkelbraun */
    	{"color": "#FABD24",
	visible:true,
      "marker": {
        "enabled": false
      }    
    }, /* dunkelgelb */
    	{"color": "#3C3C3C",
	visible:true,
      "marker": {
        "enabled": false
      }    
    }, /* schwarz */
    	{"color": "#2B0099",
	visible:true,
      "marker": {
        "enabled": false
      }    
    }, /* dunkelblau */
    	{"color": "#E7CEE2",
	visible:true,
      "marker": {
        "enabled": false
      }    
    }, /* hellviolett */
    	{"color": "#A8C3CA",
	visible:true,
      "marker": {
        "enabled": false
      }    
    }, /* hellblau */
    	{"color": "#8AB77D",
	visible:true,
      "marker": {
        "enabled": false
      }    
    }, /* hellgrün */
  ],
  "legend": {
    "enabled": true,
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
 