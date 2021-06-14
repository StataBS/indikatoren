(function(){
    return {
   plotOptions: {
        series: {
            minPointLength: 2,
            pointPadding: 0,
            borderWidth: 0,
        }
   },

  "xAxis": {
    "type": "category"
  },
  "yAxis": {
    tickAmount: 5,
    
  	//"min": 0,
  	//"max": 0.5,
    "labels": {
        "format": "{value:,.0f}"
    }    
  },
  "series": [
  {"color": "#246370"},
  {"color": "#A8C3CA"}, 
  {"color": "#FFBB58"},
  {"color": "#68AB2B"},
  {"color": "#0A3B19"}  
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
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    shared: false
  },  
  "chart": {      
    "type": "column",
    "inverted": false
  }
}
}());

 