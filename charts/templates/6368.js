(function(){
    return {
   plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0,
			//"pointWidth": 40,
 

        }
   },
  "xAxis": {
    "type": "category",
    "labels": {
      "rotation": 0 
    } 
  },
  "yAxis": {
	//"max": 100,
    "labels": {
      "format": "{value:,.0f}"
    }    
  },
  "series": [
  {"color": "#CD9C00", "visible": true}, /* hellbraun*/
  //{"color": "#83522E", "visible": true} /* dunkelbraun */
  ],
  "legend": {
    "enabled": false,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    //"x": 25,
	"y": 55,    
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
    "type": "column",
    "inverted": false,
    //"spacingTop": 100
  }
}
}());