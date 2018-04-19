(function(){
    return {
  "xAxis": {
    "tickInterval": 1
  },
  "yAxis": {
    "min": undefined, 
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
  "series": [
    {"color": "#71A3B5 ",
      "marker": {
        "enabled": false
      }    
    
    }, /* rot */
	{"color": "#B00000",
      "marker": {
        "enabled": false
      }    
    }, /* violett */
  	{"color": "#FF8028",
      "marker": {
        "enabled": false
      }    
    },/* grün  */
    {"color": "#CD9C00",
      "marker": {
        "enabled": false
      }    
    },/* braun  */
    {"color": "#923F8D",
      "marker": {
        "enabled": false
      }    
    },/* gelb  */
    {"color": "#999999",
      "marker": {
        "enabled": false
      }    
    },/* blau  */
  ],
  "legend": {
    "enabled": true,
    //"y": 50,
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
 