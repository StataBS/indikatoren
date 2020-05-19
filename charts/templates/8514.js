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
    useHTML:true,
    "rotation": -45
    ,
    "formatter": function () {
      return this.value.replace("Kleidung Kinder", "Kinderkleider")
      .replace("Kleidung Erwachsene", "Erwachsenenkleider")
      .replace("Private Vorsorge", "Private Vorsorge")
      .replace("Freizeit Kinder", "Freizeit Kinder")
      .replace("Freizeit Erwachsene", "Freizeit Erwachsene")

      //.replace("Freizeit Kinder", "Freizeit&nbsp;Kinder");
  } }
},
"yAxis": {
  max: 100,
  tickInterval: 20,
  "labels": {
    "format": "{value:,.0f}%"
  }    
},
"series": [
{"color": "#246370", "visible": true},
{"color": "#FABD24", "visible": true},
{"color": "#B00000", "visible": true}/*,
{"color": "#B375AB", "visible": true}*/
],
"legend": {
  "enabled": true,
  "layout": "horizontal",
  "verticalAlign": "top",
  "align": "left",
  //"x": 25,
  //"y": 45,    
  "itemStyle": {
    "fontWeight": "normal"
  }
},
 tooltip: {
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
  "shared": false
},
"chart": {      
  "type": "column",
 // "inverted": true,
 "width": 665,
 //"height": 484,
}
}
}());