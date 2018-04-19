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
    visible:true,
      "marker": {
        "enabled": false
      }    
    }, /* dunkelrot */
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
          	{"color": "#FABD24",
	visible:true,
      "marker": {
        "enabled": false
      }    
    }, /* dunkelgelb */
    	{"color": "#3C3C3C",
	visible:true,
      "marker": {
        "enabled": true
      }    
    }, /* schwarz */
  ],
  "legend": {
    "enabled": true,
    itemDistance: 5,
    padding: 0,
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
 