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
		  "color": "#6F6F6F",
		  legendIndex: 0,
    }, /* dunkelgrau */
    {
		"color": "#B00000",
		legendIndex: 4,
    }, /* rot */
    {
		"color": "#008AC3",
		legendIndex: 1,
    }, /* blau */
    {
    	"color": "#007A2F", 
    	legendIndex: 2,
    }, /* grün */
    {
    	"color": "#E6E600", 
    	legendIndex: 3,
    }, /* gelb */
  ],
   "legend": {
    "enabled": true,
    itemWidth: 90,
    itemDistance: 10,
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