(function(){
  return {
"xAxis": {
  "tickInterval": 1,
},
"yAxis": {
  tickInterval: 2500,
"labels": {
  "format": "{value:,.0f}",
  x: -5
}
},	
"tooltip": {
  "shared": false, 
"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
},
"series": [
 {"color": "#E7CEE2",
  "index": 1},
 {"color": "#FFDA80",
    "index": 2}, 
  {"color": "#923F8D",
    "index": 3}, 
{"color": "#CD9C00",
    "index": 4} 
  ],
"legend": {
  "enabled": true,
  "x": 45,
  //"y": 55,
  "layout": "horizontal",
  "verticalAlign": "top",
  "itemMarginBottom": 5,
  "align": "left",
  "itemStyle": {
    "fontWeight": "normal"
  }
},
"plotOptions": {
  "line": {
    "marker":{
      "enabled": false,
      "symbol": "circle",
    } 
  }
}
}
}());