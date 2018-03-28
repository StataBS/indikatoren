(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
    labels: { 
		style: { 
			textOverflow: 'none' // prevents ellipsis
		} 
	}
  },
  "yAxis": {
    "min": 0,
      "labels": {
      "format": "{value:,.0f}",
      },
  },	
  "tooltip": {
    "shared": false,
     //"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.0f}</b><br/>',
  },
 "series": [
    {
      "color": "#B00000",
      "legendIndex": 1
    }, /* rot */
    {
		"color": "#662673",
    	"legendIndex": 4
    }, /* violett */
    {
		"color": "#008AC3",
    	"legendIndex": 2
    }, /* blau */
    {
    	"color": "#007A2F", 
    	"legendIndex": 3
    }, /* grün */
  ],
   "legend": {
    "enabled": true,
    //"x": 45,
    "y": 35,
    "itemWidth": 150,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
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