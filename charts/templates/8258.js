(function(){
    return {
  "xAxis": {
  	//min: 1996,
  	//max: 2014,
    "tickInterval": 2
  },
  "yAxis": {
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
  },
  "series": 
  [
    {"color": "#FF8028",
      "marker": {
        "enabled": false
      }    
    }, 
    	{"color": "#B375AB",
	visible:true,
      "marker": {
        "enabled": false
      }    
    },
    	{"color": "#68AB2B",
	visible:true,
      "marker": {
        "enabled": false
      }    
    },
    	{"color": "#FABD24",
	visible:true,
      "marker": {
        "enabled": false
      }    
    },
    {"color": "#0F7399",
	visible:true,
      "marker": {
        "enabled": false
      }    
    },
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
 