(function(){
    return {
 "xAxis": {
    "type": "category",
    "labels": {
    rotation: 0
    }
  },
  "yAxis": {
    max: 25000,
    tickAmount:6,
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
  {"color": "#8A8A8A"}, 
  {"color": "#007A2F"}, 
  {"color": "#0A3B19"}, 
	  ],
  "legend": {
    "enabled": true,
    //"y": 45,
       "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 1,
    "align": "left",
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