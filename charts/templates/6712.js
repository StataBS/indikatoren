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
    	padding: -100,
    	x:-5,
      step:1,
      rotation: 0,
      y: 3,
    } 
  },
  "yAxis": {
  	//max: 140000,
  	tickInterval: 200000,
    "labels": {
	style: { 
		textOverflow: 'none' // prevents ellipsis
	},
    y: 18,
      "format": "{value:,.0f}"
    }    
  },
  "series": [
  {"color": "#923F8D", "visible": true}, /* gelb*/
  {"color": "#E7CEE2", "visible": true} /* grün */
  ],
  "legend": {
  	//itemWidth: 120,
  	itemDistance: 6,
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    //"x": 25,
	  //"y": 55,    
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
  }
}
}());