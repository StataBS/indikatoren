(function(){
  return {
"plotOptions": {
  "series": {
    pointPadding: 100,
    borderWidth: 0,
    "pointWidth": 30,
    "dataLabels": {
      "style": {
        "fontSize": "10px"
      }
    },
    "stacking": "normal"
  }
},
"xAxis": {
  "tickInterval": 1
},  
"yAxis": {
  "labels": {
    "format": "{value:,.0f}",
  },
"max": undefined
},
"legend": {
  "enabled": true,
  "layout": "horizontal",
  "verticalAlign": "top",
  "align": "left",
  //"y": 40,
  //"itemWidth": 150,
  "itemMarginBottom": 5,
  "itemStyle": {
    "fontWeight": "normal"
  }
},
"series": [
{"color": "#923f8d", "index": 3, "legendIndex":0}, /*grün dunkel2*/
{"color": "#b375ab", "index": 2, "legendIndex":2}, /*grün mittel*/
{"color": "#A8C3CA", "index": 1, "legendIndex":1}, 
{"color": "#246370", "index": 0, "legendIndex":3}, 
],
"chart": {
  "marginBottom": 75,
  //"marginTop": 75,
  "type": "column",
  "inverted": false
},
"tooltip": {
"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
"footerFormat": 'Total: <b>{point.total:,.0f}</b>',
 "shared": false
},
}
}());
