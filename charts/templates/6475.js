(function(){
    return {
	plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0
        }
    },
  "xAxis": {
    "type": "category"
  },
  "yAxis": {
  	//"min": 0,
  	//"max": 0.5,
    "labels": {
      "format": "{value}" 
    }    
  },
  "series": [
  {"color": "#68AB2B"},
  {"color": "#A0BEC8"}, 
  {"color": "#FFDA80"}, 
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    //"x": 25,
	"y": 45,  
	//"itemWidth": 300,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>',
    shared: false
  },  
  "chart": {
    "marginBottom": 75,
    "type": "column",
    "inverted": false
  }
}
}());

 