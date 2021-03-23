(function(){
  return {
"plotOptions": {
  "series": {
    "pointWidth": 25,
    "dataLabels": {
      "style": {
        "fontSize": "10px"
      }
    },
    "stacking": "normal"
  }
},
"xAxis": {
  "type": "category",  
  "labels": {
    rotation: 0
  }
},  
"yAxis": {
  //tickAmount: 9,
  "labels": {
    "format": "{value:,.0f}"
  },
  "reversedStacks": false
},
"tooltip": {
  pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
  footerFormat: 'Total: <b>{point.total:,.0f}</b>',
  "shared": true,
  valueDecimals: 0
}, 
"legend": {
  enabled: true,
  "layout": "vertical",
  "verticalAlign": "middle",
  "itemMarginBottom": 5,
  "align": "right",
  itemWidth: 180,
  "itemStyle": {
    textOverflow: null,
    "fontWeight": "normal"
  }
},
"series": [
  {
    "color": "#661200",
    "legendIndex": 3     
  },
  {
    "color": "#B00000",
    "legendIndex": 2     
  },
  {
    "color": "#FF8028",
    "legendIndex": 1     
  },
  {
    "color": "#FABD24",
    "legendIndex": 0     
  },
],
"chart": {    
  "type": "column"
}
}
}());
