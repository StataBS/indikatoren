(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
    labels: {
      rotation: -45
    }
  },
  "yAxis": {
    tickAmount: 5,
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
        "enabled": true
      }    
    }, /* dunkelrot */
    	{"color": "#007A2F",
	visible:true,
      "marker": {
        "enabled": true
      }    
    }, /* dunkelgrün */
    	{"color": "#4f81bd",
	visible:true,
      "marker": {
        "enabled": true
      }    
    }, /* dunkelblau */
    	{"color": "#662673",
	visible:true,
      "marker": {
        "enabled": true
      }    
    }, /* dunkelviolett */
    	{"color": "#FABD24",
	visible:true,
      "marker": {
        "enabled": true
      }    
    }, /* dunkelviolett */
  ],
  "legend": {
    "enabled": true,
    //"y": 35,
    "itemWidth": 100,
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
 