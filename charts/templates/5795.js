(function(){
    return {
  
  "xAxis": {
    "type": "category",
  },
  "yAxis": {
	//"max": 100,
    "labels": {
      "format": "{value:,.0f}%"
    }    
  },
  "series": [
  {"color": "#990300", "visible": true}, /* rot*/
  //{"color": "#007A2F", "visible": true} /* ... */
  ],
  "legend": {
    "enabled": false,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "x": 35,
	"y": 35,    
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
    "inverted": false,
    "spacingBottom": 40
  },
   plotOptions: {
        series: {
           "pointWidth": 30,
        }
   },

}
}());