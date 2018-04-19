(function(){
    return {
  
  "xAxis": {
  	   "labels": {
     align: "left",
     x: -105,
  	   },
  	tickInterval: 1,
    "type": "category",
  },
  "yAxis": {
	//"max": 100,
    "labels": {
      "format": "{value:,.0f}%"
    }    
  },
  "series": [
  {"color": "#0F7399", "visible": true}, /* blau*/
  //{"color": "#007A2F", "visible": true} /* ... */
  ],
  "legend": {
    "enabled": false,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "x": 35,
	//"y": 35,    
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
   tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
    "shared": false
  },
  "chart": {      
    "type": "column",
    "inverted": true,
    "spacingBottom": 40,
     marginLeft: 120, 

  },
   plotOptions: {
        series: {
           "pointWidth": 20,
        }
   },

}
}());