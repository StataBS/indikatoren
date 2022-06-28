(function(){
    return {
 "xAxis": {
  "tickInterval": 1,
     "type": "category",
     "labels": {
       rotation: 0
     },
  },
  "yAxis": {
    min: 40,
    max: 140,
    tickAmount: 11,
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [
  {"color": "#D7E8D2"},
  {"color": "#73B97C"}, 
  {"color": "#007A2F"}, 
  {"color": "#0A3B19"}, 
	  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 1,
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