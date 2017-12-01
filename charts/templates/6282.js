(function(){
    return {
  "xAxis": {
    "tickInterval":1,
    labels: {
      rotation: -45
    }
  },
  "yAxis": {
    tickInterval: 50000,    
  	"labels": {
  		"format": "{value:,.0f}", 
      y: 3
  	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
  },
  "series": [
    {"color": "#B00000",
      "marker": {
        "enabled": true
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
    	/*{"color": "#662673",
	visible:true,
      "marker": {
        "enabled": true
      }    
    },  dunkelviolett */
  ],
  "legend": {
    "enabled": true,
    //"x": 45,
    //"y": 35,
    "itemWidth": 300,
    margin: 3, 
    padding: 1,
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
 