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
      "rotation": 0 
    } 
  },
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}%"
    },
    max: 100,
  },
  "series": [
  {"color": "#b00000", "visible": true}, /* */
  {"color": "#661200", "visible": true}, /*  */
  {"color": "#dc440e", "visible": true}, /* */
  {"color": "#cd9c00", "visible": true}, /*  */
  {"color": "#7f5f1a", "visible": true}, /* */
  {"color": "#ffda80", "visible": true} /*  */
  ],
  "legend": {
    "enabled": true,
    itemDistance: 5,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    //"x": 25,
	  //"y": 45,    
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
    "spacingBottom": 50
  }
}
}());