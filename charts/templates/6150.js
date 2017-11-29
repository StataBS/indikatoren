(function(){
    return {
  "xAxis": {
    "tickInterval": 3
  },
  "yAxis": {
    "min": undefined, 
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,,.1f}</b><br/>'
  },
  "series": [
    {"color": "#b00000 ",
    legendIndex: 1,
      "marker": {
        "enabled": true
      }    
    }, /* rot */
	{"color": "#672773",
    legendIndex: 2,
      "marker": {
        "enabled": true
      }    
    }, /* violett */
  	{"color": "#007a2f",
    legendIndex: 0,
      "marker": {
        "enabled": true
      }    
    },/* grün  */
    {"color": "#008AC3",
    legendIndex: 3,
      "marker": {
        "enabled": true
      }    
    },/* blau  */
  ],
  "legend": {
    "enabled": true,
    //"x": 30,
    "y": 45,
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
 