(function(){
  return {
 plotOptions: {
      series: {
          pointPadding: 0,
          borderWidth: 0,
      }
 },

 "xAxis": {
  "type": "category",
  "labels": {
    useHTML:true,
    "rotation": 0
    ,
    "formatter": function () {
      return this.value.replace("Verzicht auf Kinderbetreuung", "Verzicht auf Kinderbetr.")
      .replace("Weniger Freizeitakt. (Eltern)", "Weniger Freizeitakt.")
      .replace("Freizeit Kinder", "Freizeit&nbsp;Kinder");
  } }
},
"yAxis": {
  tickInterval: 20,
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
  marginBottom:65,
 // "inverted": true,
  width: 665
}
}
}());