(function(){
    return {
 "xAxis": {
    "tickInterval": 1,
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
  {"color": "#FFBB58"},
  {"color": "#FF8028"}, 
  {"color": "#DC440E"}, 
  {"color": "#B00000"}, 
	  ],
  "legend": {
    "enabled": true,
    "y": 45,
    itemWidth: 250,
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
    },
    series: {
       connectNulls: true
    }
  },
 "chart": {  
    	marginRight: 18,
   }
}
}());