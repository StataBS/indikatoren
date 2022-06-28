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
  {"color": "#C8C8C8"},
  {"color": "#008AC3"}, 
  {"color": "#6F6F6F"}, 
  {"color": "#2B0099"}, 
	  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 1,
    "align": "left",
     labelFormatter: function(){
      return this.name.replace("Öffentliche Verwaltung, Sozialversicherungen (inkl. staatl. Bildungsinstitutionen)", "Öffentl. Verwaltung, Sozialvers. (inkl. staatl. Bildungsinst.)")
    },
    "itemStyle": {
      "fontWeight": "normal",
       textOverflow: "none"
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