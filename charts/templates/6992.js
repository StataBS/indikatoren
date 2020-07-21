(function(){
    return {
 "xAxis": {
    "tickInterval": 1,
    type: 'category',
  },
  "yAxis": {
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>'
  },
 "series": [
  {"color": "#DC4403"},
  {"color": "#008AC3"}
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