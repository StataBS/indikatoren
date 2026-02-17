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
    	step: 1,
    	padding:-100,
    	x:-5,
    	y: 3,
      "rotation": 0,
		  formatter: function(){
        return this.value.replace("und", "u.");
      },
      style: { 
  		  textOverflow: 'none' // prevents ellipsis
  		} 
    } 
  },
  "yAxis": {
  	max: 180000,
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
    "verticalAlign": "top",
    "align": "left",
    itemDistance: 10,
    symbolPadding: 3,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
   tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    "shared": false
  },
  "chart": {   
  	 marginRight: 18,
    "type": "column",
    "inverted": true,
    //"spacingTop": 100
  }
}
}());