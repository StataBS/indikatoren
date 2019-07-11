(function(){
    return {
   plotOptions: {
        series: {
            pointPadding: 0.1,
            borderWidth: 0,
        }
   },

  "xAxis": {
    "type": "category"
  },
  "yAxis": {
  	//"min": 0,
  	//"max": 0.5,
    "labels": {
      "format": "{value:,.0f}"
    }    
  },
  "series": [
  {"color": "#923F8D"},
  {"color": "#DC440E"}, 
  {"color": "#FFDA80"},  
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f} m²</b><br/>' ,
  },  
  "chart": {      
    "type": "column",
    "inverted": false
  }
}
}());

 