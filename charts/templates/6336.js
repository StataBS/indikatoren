(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
  },
  "yAxis": {
    "min": 0,
    max: 25,
    //endOnTick: false,
    tickInterval: 5,
	  "labels": {
		  "format": "{value}%"
	  }
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b>%<br/>'
  },
 "series": [
    {
		"color": "#B00000",
    	"legendIndex": 4,
    }, /* rot */
    {
		"color": "#662673",
    	"legendIndex": 1
    }, /* violett */
    {
		"color": "#008AC3",
    	"legendIndex": 3,
    }, /* blau */
    {
    	"color": "#007A2F", 
    	"legendIndex": 0,
    }, /* grün */
    {
    	"color": "#FABD24", /* dunkelgelb */
    	"legendIndex": 2,
    	"marker": {
        	"enabled": false
    	}
    },
  ],
   "legend": {
    "enabled": true,
    "layout": "vertical",
    "verticalAlign": "middle",
    "align": "right",
    "itemStyle": {
      fontWeight: "normal", 
      textOverflow: null,
      whiteSpace: 'nowrap',
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
    width: 665, 
    spacingTop: 5,
  },
};
}());