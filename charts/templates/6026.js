(function(){
    return {
  "chart": {
    "type": "column"
  },
  plotOptions: {
    column: {
      stacking: 'normal'
    },
    "series": {
      "borderWidth": 0,
      "stacking": "percent"
    }
  },
  "xAxis": {
    "tickInterval": 1,
  },
  "yAxis": {
    "min": 0, 
	  "labels": {
		  "format": "{value}%"
	  }
  },	
  "tooltip": {
    "shared": false, 
	  "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} ha</b> ({point.percentage:.1f}%)<br/>',
  },
 "series": [
    {
		"color": "#8A8A8A",
		"legendIndex": 3
    },
    {
		"color": "#008AC3",
		"legendIndex": 2
    }, /* blau */
    {
    	"color": "#68ab2b", 
    	"legendIndex": 1
    }, /* grün */
  ],
   "legend": {
    "enabled": true,
    //"x": 45,
    "y": 35,
    "itemWidth": 100,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  }
}
}());