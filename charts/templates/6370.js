(function(){
    return {
  "xAxis": {
    type: "category",
    "tickInterval": 1,
    labels: {
      rotation: 0
    }
  },
  "yAxis": {
    "min": 0, 
    max: 640,
    tickInterval: 160,
    tickAmount: 5,
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
		"color": "#474747",
    	"legendIndex": 0
    }, /* rot */
    {
		"color": "#662673",
    	"legendIndex": 4
    }, /* violett */
    {
		"color": "#008AC3",
    	"legendIndex": 1
    }, /* blau */
    {
    	"color": "#007A2F", 
    	"legendIndex": 2
    }, /* grün */
        {
    	"color": "#E6E600", 
    	"legendIndex": 3
    }, /* gelb */
  ],
   "legend": {
    "enabled": true,
    itemWidth: 90,
    itemDistance: 0,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      fontWeight: "normal",
      textOverflow: null,
      whiteSpace: 'nowrap',
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