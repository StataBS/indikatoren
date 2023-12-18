(function(){
  return {
"yAxis": {
  tickAmount: 7,
  "labels": {
     "formatter": function(){
      return Highcharts.numberFormat((this.value),0)+'';
    } 
  },
  
},
"xAxis": {
  "tickInterval": 1
},
"legend": {
  itemDistance: 8,
  "enabled": true,
  "layout": "horizontal",
  "verticalAlign": "top",
  "itemMarginBottom": 5,
  //"x": 35,
  //"y": 50,
  "align": "left"
},

"series": [
  {
    "index": 0,
    "color": "#68ab2b"
  },
  {
    "index": 1,
    "color": "#006400"
  },
  {
    "index": 1,
    color: "black",
    visible: false
  }
],
"tooltip": {
 "pointFormatter": function(){
    return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),0) + '</b><br/><b>'
  },
  "shared": false
},  
"chart": {    
  //"marginTop": 120
},  
"plotOptions": {
  "series": {
    "marker": {
      "enabled": false,
      "symbol": "circle"
    },
    "dataLabels": {
      "enabled": false
    }
  }
}
}
}());
