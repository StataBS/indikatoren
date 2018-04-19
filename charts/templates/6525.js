(function(){
    return {
   plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0,
			"pointWidth": 20,
 

        }
   },
  "xAxis": {
    "type": "category",
    "labels": {
      "rotation": 0,
    } 
  },
  "yAxis": {
	//"max": 100,
    "labels": {
      "format": "{value:,.0f}",
      	style: { 
			textOverflow: 'none' // prevents ellipsis
	 } 
    }    
  },
  "series": [
  {"color": "#007A2F", "visible": true}, /* grün*/
  ],
  "legend": {
    "enabled": false,
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
    headerFormat: ' ',
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {point.name}: <b>{point.y:,.0f}</b><br/>',
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