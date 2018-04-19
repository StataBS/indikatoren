(function(){
    return {
  "xAxis": {
    //"tickInterval": 1,
  },
  "yAxis": {
    "min": 0, 
	  "labels": {
		  "format": "{value}"
	  }
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [
    {
		"color": "#B00000",
    	"legendIndex": 3
    }, /* rot */
    {
		"color": "#662673",
    	"legendIndex": 4
    }, /* violett */
    {
		"color": "#008AC3",
    	"legendIndex": 0
    }, /* blau */
    {
    	"color": "#007A2F", 
    	"legendIndex": 2
    }, /* grün */
        {
    	"color": "#E6E600", 
    	"legendIndex": 1
    }, /* gelb */
  ],
   "legend": {
    "enabled": true,
    //"x": 45,
    //"y": 35,
    margin: 2,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  exporting: {
    enabled: false
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