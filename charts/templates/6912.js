(function(){
  return {
plotOptions: {
      series: {
          pointPadding: 0,
          borderWidth: 0,
          minPointLength: 2
      }
  },
"xAxis": {
  "type": "category"
},
"yAxis": {
  max: 400000000,
  tickInterval: 100000000,
  //"min": 0,
  //"max": 0.5,
  "labels": {
    "format": "{value:,.0f}",
  }    
},
"series": [
{"color": "#FFBB58"},
{"color": "#DC440E"}
],
"legend": {
  "enabled": true,
  "layout": "horizontal",
  "verticalAlign": "top",
  "align": "left",
  //"x": 25,
  //"y": 45,  
  //"itemWidth": 300,
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

