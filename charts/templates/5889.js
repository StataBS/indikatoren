(function(){
    return {
  "data":{
  	"switchRowsAndColumns": false
  },
  "xAxis": {
    "type": "category"
  },
  "yAxis": {
    "labels": {
      "format": "{value:,.0f} Mio. km"
    }    
  },
  "series": [
  {"color": "#b00000"},
  {"color": "#4f81bd"}, 
  {"color": "#9A86A6"}, 
  //{"color": "#9bbb59"},  
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "x": 55,
	//"y": 55,  
	"itemWidth": 300,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.3f} Mio. km</b><br/>',
    shared: false
  },  
  "chart": {      
    "type": "column",
    "inverted": false
  },
    plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0,
        }
    }
}
}());

 