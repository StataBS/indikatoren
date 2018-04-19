(function(){
    return {
 "xAxis": {
    "tickInterval": 12,
     "type": "category",
     labels:{
     		"formatter": function() {
   			 return this.value.split("-").slice(0, -1);
		},
     }
  },
  "yAxis": {
	"labels": {
		"format": "{value:,.0f}",
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
    //"y": 45,
    //itemWidth: 150,
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