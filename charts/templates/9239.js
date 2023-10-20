(function(){
    return {
   plotOptions: {
        series: {
           // pointPadding: 0.1,
            //borderWidth: 0,
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
    //tickAmount: 9,
    tickInterval: 1000,
   //max: 7000,
    "labels": {
      "format": "{value:,.0f}"
    }    
  },
  "series": [
  {"color": "#923F8D", "visible": true}, /* hellbraun*/
  //{"color": "#83522E", "visible": true} /* dunkelbraun */
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
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    "shared": false
  },
  "chart": {      
    "type": "column",
    "inverted": false,
    //"spacingTop": 100
  }
}
}());