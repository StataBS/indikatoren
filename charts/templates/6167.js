(function(){
    return {
	"plotOptions": {
		"series": {
			"pointWidth": 7
		}
	},
  "xAxis": {
    "type": "category",
      "labels": {
      "rotation": -90 
    }  
   },
  "yAxis": {
    "min": 0,
    "max": 700000,
    "tickInterval":350000,
    "labels": {
      "format": "{value:,.0f}",
    }    
  },
   "series": [
  {"color": "#44ab2b"} /* grün*/
  ],
  "legend": {
    "enabled": false,
    "x": 250,
  	//"y": 55,   
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "top",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    "shared": false
  },
  "chart": {      
    "type": "column",
    "inverted": false,
     "spacingBottom": 40
  }
}
}());