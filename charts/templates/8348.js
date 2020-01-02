(function(){
    return {
  "xAxis": {
    "tickInterval":1
  },
  "yAxis": {
    "min": 0,
    "max": 100, 
	"labels": {
		"format": "{value}%"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>'
  },
  "series": [
    
    {"color": "#ff8028", /* orange */
      "marker": {
        "enabled": false
      }    
    }, 
    	{"color": "#B00000", /* dunkelrot */
	visible:true,
      "marker": {
        "enabled": false
      }    
    }, 
    	{"color": "#4f81bd", /* dunkelblau */
	visible:true,
      "marker": {
        "enabled": false
      }    
    }, 
    	{"color": "#662673", /* dunkelviolett */
	visible:true,
      "marker": {
        "enabled": false
      }    
    },
        {"color": "#fabd24", /* gelb */
    "marker": {
      "enabled": false
    }    
    }, 
        {"color": "#007a2f", /* grün */
      "marker": {
        "enabled": false
      }    
    }, 


  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    itemWidth: 170,
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
 