(function(){
    return {
 "xAxis": {
   "type": "category",
    labels:{
      rotation: 0
    }
  },
  "yAxis": {
      tickInterval: 5000,
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
      width: 460,
      itemWidth: 230,
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "labelFormatter": function (){
      return this.name
        .replace("Öffentliche Verwaltung, Sozialversicherungen", "Öffentliche Verwaltung, <br/>Sozialversicherungen");
    },
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
 "plotOptions": {
            "series": {
                "stacking": null,
				pointPadding: 0, 
				groupPadding: 0.1, 
				borderWidth: 0

            }
        },
        "chart": {      
            "type": "column"
        },
    }
}());