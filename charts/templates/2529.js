(function(){
    return {
 "xAxis": {
    //"tickInterval": 1,
    "tickPositions": [2005,2008,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021]
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
  {"color": "#D7E8D2"},
  {"color": "#8A8A8A"}, 
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