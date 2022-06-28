(function(){
  return {
"xAxis": {
  "tickInterval": 10
},
"yAxis": {
  "min": 0, 
  tickInterval: 50000,
"labels": {
  "format": "{value:,.0f}"
}
},	
"tooltip": {
  "shared": false, 
"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
},
"series": [
     {"color": "#007A2F",
    "marker": {
      "enabled": false
    }    
  }, /* black */
  {"color": "#923F8D",
    "marker": {
      "enabled": false
    }    
  }, /* violett */
{"color": "#DC440E",
    "marker": {
      "enabled": false
    }    
  }, /* rot */
  {"color": "#FFDA80",
    "marker": {
      "enabled": false
    }    
  },/* gelb  */
],
"legend": {
  "enabled": true,
  //"x": 50,
  //"y": 25,
  itemDistance: 40,
  "layout": "horizontal",
  "verticalAlign": "top",
  //"itemMarginBottom": 0,
  "align": "left",
  "itemStyle": {
    "fontWeight": "normal"
  }
},
"plotOptions": {
  "line": {
  "connectNulls": true,
    "marker":{
      "enabled": false,
      "symbol": "circle",
    }
  }
},
"chart": {  
  type: 'line',
  width: 662,
}
}
}());
