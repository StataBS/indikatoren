(function(){
    return {
   plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0,
			itemWidth: 10, 

        }
   },
  "xAxis": {
    "type": "category",
    "labels": {
    	step:1,
    	padding:-100,
    	x:-5,
      "rotation": 0 
    } 
  },
  "yAxis": {
  	//max: 140000,
  	//tickInterval: 40000,
    "labels": {
    	y:10,
      "format": "{value:,.0f}"
    }    
  },
  "series": [
  {"color": "#246370", "visible": true}, /* */
  {"color": "#A8C3CA", "visible": true} /*  */
  ],
  "legend": {
	"enabled": true,
    "layout": "horizontal",
    "align": "left",
    "verticalAlign": 'top',
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
   tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    "shared": false
  },
  "chart": {      
    "type": "column",
    "inverted": true,
    //"spacingTop": 100
  }
}
}());