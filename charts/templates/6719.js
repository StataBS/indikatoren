(function(){
    return {
   plotOptions: {
      series: {
        pointPadding: 0, 
  			groupPadding: 0.1, 
  			borderWidth: 0,
      }
   },
  "xAxis": {
    type: "category",
    labels: {
      x: -5,
      y: 3,
      step: 1,
      rotation: 0,
      padding: -100,
      formatter: function () {
        return this.value.replace("und","u.");
      }
    } 
  },
  "yAxis": {
  	tickInterval: 10,
    "labels": {
    	y: 10,
      "format": "{value:,.0f}"
    }    
  },
  "series": [
  {"color": "#246370", "visible": true}, /* */
  {"color": "#A8C3CA", "visible": true} /*  */
  ],
  "legend": {
  	x:-1,
  	itemWidth: 150,
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
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
    "shared": false
  },
  "chart": {     
    "type": "column",
    "inverted": true,
  }
}
}());