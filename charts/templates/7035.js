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
  {"color": "#FFBB58"},
  {"color": "#FF8028"}, 
  {"color": "#DC440E"}, 
  {"color": "#B00000"}, 
	  ],
  "legend": {
    x: -1,
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 1,
    //width: 340,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal",
      textOverflow: "none",
      whiteSpace: "nowrap"
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