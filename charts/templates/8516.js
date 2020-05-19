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
    "rotation": -45,
    "formatter": function () {
     // var tmp = "&nbsp;&nbsp;&nbsp;" + this.value;
      return this.value.replace("Fam.-/Haushaltszulage", "Familienzulagen")
      .replace("Andere Beiträge", "And. Beiträge")
      .replace("Alimente für Kinder", "Kinderalimente");
  } }
},
"yAxis": {
  max: 75,
  tickInterval: 25,
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
  "inverted": false,
  "width": 665,
 // "height": 484,
}
}
}());