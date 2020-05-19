(function(){
    return {
  "xAxis": {
    "tickInterval": 1
  },
  "yAxis": {
    "min": 0, 
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: {format: value:,.0f}</b><br/>'
  },
  "series": [
    {"color": "#246370",
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
    }
  ],
  "legend": {
    "enabled": true,
    //"y": 50,
    //"itemWidth": 200,
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
 