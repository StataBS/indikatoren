(function(){
    return {
  
  "xAxis": {
    "type": "category",
    "labels": {
      //"rotation": -90 
    } 
  },
   plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0,
        }
   },
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}%"
    }    
  },
  "series": [
  {"color": "#FABD24", "visible": true}, /* hellrot*/
  {"color": "#B00000", "visible": true} /* dunkelrot */
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
   	"y": 35,    
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
   tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>',
    "shared": false
  },
  "chart": {      
    "type": "column",
    "inverted": false,
    "spacingBottom": 40
  }
}
}());