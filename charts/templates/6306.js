(function(){
    return {
  "xAxis": {
    "tickInterval": 1
  },
  "yAxis": {
    min: 95, 
    max: 125,
    tickInterval: 5,
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
  },
  "series": [
    {"color": "#b00000 ",
      "marker": {
        "enabled": true
      }    
    
    }, /* rot */
	{"color": "#672773",
      "marker": {
        "enabled": true
      }    
    }, /* violett */
  	{"color": "#007a2f",
      "marker": {
        "enabled": true
      }    
    },/* grün  */
    {"color": "#7F5F1A",
      "marker": {
        "enabled": true
      }    
    },/* braun  */
    {"color": "#E6E600",
      "marker": {
        "enabled": true
      }    
    },/* gelb  */
    {"color": "#008AC3",
      "marker": {
        "enabled": true
      }    
    },/* blau  */
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    margin: 3,
    itemDistance: 5,
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
 