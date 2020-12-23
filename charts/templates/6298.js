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
      "rotation": 0,
      padding: -100,
      y: 3,
    } 
  },
  "yAxis": {
    tickAmount: 8,
  //	max: 60000, 
    "labels": {
      y: 12,
      "format": "{value:,.0f}",
      padding: 1
    }    
  },
  "series": [
  {"color": "#7F5F1A", "visible": true}, /* braun*/
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
    "inverted": true,
    width: 665, 
    spacing: [1,1,3,1]
    //"spacingTop": 100
  }
}
}());