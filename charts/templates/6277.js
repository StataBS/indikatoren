(function(){
    return {
      chart: {
        spacingTop: 5,
      },
  "xAxis": {
    tickInterval: 2,
    showLastLabel: true,
    labels: {
      //rotation: -45,
    },
  },
  "yAxis": {
    "min": 0, 
	  "labels": {
		  "format": "{value:,.0f}%",
		  y: 3
	  }
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b>%<br/>'
  },
 "series": [
    {
		"color": "#B00000",
    	"legendIndex": 2
    }, /* rot */
    {
    	"color": "#008AC3", 
    	"legendIndex": 0
    }, /* blau */
    {
    	"color": "#3c3c3c", /* schwarz */
    	"legendIndex": 1,
    },
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
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
  }
}
}());