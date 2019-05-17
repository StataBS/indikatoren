(function(){
    return {
 "xAxis": {
    tickInterval: 1,
    type: 'category',
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
  {"color": "#A0BEC8"},
  {"color": "#7F5F1A",
    "visible": false
  }, 
  {"color": "#662673",
    "visible": false
  }, 
  {"color": "#B00000",
    "visible": false
  },
  {"color": "#246370",
    "visible": false
  },
  {"color": "#9E7C59"},
  
	  ],
  "legend": {
    "enabled": true,
    //"y": 45,
  //  itemWidth: 72,
    itemDistance: 18,
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
      "marker":{
        "enabled": false,
        "symbol": "circle",
      } 
    }
  }
}
}());