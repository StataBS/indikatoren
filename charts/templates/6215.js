(function(){
    return {
  "xAxis": {
    //"tickInterval": 1
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
  	   {"color": "black",
      "marker": {
        "enabled": false
      }    
    }, /* black */
    {"color": "#b00000 ",
      "marker": {
        "enabled": false
      }    
    }, /* rot */
	{"color": "#672773",
      "marker": {
        "enabled": false
      }    
    }, /* violett */
    {"color": "#008AC3",
      "marker": {
        "enabled": false
      }    
    },/* blau  */
  ],
  "legend": {
    "enabled": true,
    "x": 50,
    //"y": 25,
    "itemWidth": 1000,
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
 