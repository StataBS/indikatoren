(function(){
  return {
"xAxis": {
  tickInterval: 1     
},
"yAxis": {
  tickInterval: 100,
"labels": {
  "format": "{value:,.0f}",
}
},	
tooltip: {
"pointFormatter": function(){
    return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),0) + '</b>' 
  },
},
"series": [
 {"color": "#246370", legendIndex: 1, zIndex: 2},/**/
//{"color": "#A0BEC8", legendIndex: 3, zIndex: 1, dashStyle: 'ShortDash',}, /**/	  
{"color": "#008AC3", legendIndex: 2, zIndex: 2}, /**/
//{"color": "#689199", legendIndex: 4, zIndex: 1, dashStyle: 'ShortDash',}, /**/


  ],
"legend": {
  "enabled": true,
  "layout": "horizontal",
  "verticalAlign": "top",
  "itemMarginBottom": 5,

  //itemDistance: 10,
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
},
chart:{
  marginRight: 20,
}
}
}());