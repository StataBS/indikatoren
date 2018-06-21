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
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>'
  },
  "series": [
    {"color": "#71A3B5 ",
      "marker": {
        "enabled": false
      }    

    }, /*  */
	{"color": "#B00000",
      "marker": {
        "enabled": false
      }    
    }, /*  */
  	{"color": "#CD9C00",
      "marker": {
        "enabled": false
      }    
    },/*   */
    {"color": "#FF8028",
      "marker": {
        "enabled": false
      }    
    },/*   */
    {"color": "#923F8D",
      "marker": {
        "enabled": false
      }    
    },/*   */
    {"color": "#999999",
      "marker": {
        "enabled": false
      }    
    },/*   */
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
 