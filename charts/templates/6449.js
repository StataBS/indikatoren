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
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
  },
 "series": [
  {"color": "#C8C8C8"},
  {"color": "#008AC3"}, 
  {"color": "#6F6F6F"}, 
  {"color": "#2B0099"}, 
	  ],
  "legend": {
    "enabled": true,
    symbolPadding: 3,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    labelFormatter: function(){
      return this.name.replace("Öffentliche Verwaltung, Sozialversicherungen (inkl. staatl. Bildungsinstitutionen)", "Öffentliche Verwaltung, Sozialversicherungen (inkl. staatl. Bildungsinst.)")
    },
    "itemStyle": {
      textOverflow: "none",
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
  },
  chart: {
    marginRight: 15,
  }
}
}());