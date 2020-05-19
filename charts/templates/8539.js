(function(){
  return {
 plotOptions: {
      series: {
          pointPadding: 0,
          borderWidth: 0,
    "pointWidth": 5,


      }
 },
"xAxis": {
			"type": "category",
			"labels": {
				padding: 1,
				step: 1,
				y: 3,
				x: -15,
				"style": {
					"color": "#000000",
					"fontSize": "8px"
				}
			}
},

"yAxis": {
  tickInterval: 100,
//"max": 1000,
  "labels": {
    "format": "{value:,.0f}",
    y: 10,
      style: { 
    textOverflow: 'none' // prevents ellipsis
 } 
  }    
},
"series": [
{"color": "#007A2F"}, /* grün*/{
  "visible": false
}
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
  marginRight: 30,
  "type": "column",
  "inverted": true,
 // "height": 350,
 // marginBottom: 50
  //"spacingTop": 100
  
}
}
}());