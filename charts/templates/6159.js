(function(){
    return {
   plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0,
        }
   },

  "data":{
  	"switchRowsAndColumns": false
  },
  "xAxis": {
    "type": "category"
  },
  "yAxis": {
  	//"min": 0,
  	//"max": 0.5,
    "labels": {
      "format": "{value}%"
    }    
  },
  "series": [
  {"color": "#b00000"},
  {"color": "#923f8d"}, 
  {"color": "#b375ab"}, 
  //{"color": "#9bbb59"},  
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    //"x": 25,
	//"y": 25,  
	"itemWidth": 300,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>',
    shared: true
  },  
  "chart": {      
    "type": "column",
    "inverted": false
  }
}
}());

 