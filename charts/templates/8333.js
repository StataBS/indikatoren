(function(){
  return {
 plotOptions: {
      series: {
          pointPadding: 0,
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
    "format": "{value:,.0f}%"
  }    
},
"series": [
{"color": "#A8C3CA"},
{"color": "#FABD24"}, 
{"color": "#B375AB"}  
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
  pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
  shared: false
},  
"chart": {      
  "type": "column",
  "inverted": true, 
   marginRight: 25
}
}
}());