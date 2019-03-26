(function(){
    return {
 "xAxis": {
    "type": "category",
    labels:{
      rotation: 0
    }
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
	{"color": "#6F6F6F"}, /*BS*/
  {"color": "#FF8028"}, /*BL*/
 	{"color": "#A8C3CA"}, /*AG*/
	{"color": "#008AC3"}, /*ZH*/
	  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
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