(function(){
  return {
//seriesMapping necessary for charts with error bars. 
"data": {
  "seriesMapping": [
    {
      "x": 0
    },
    {
      "x": 0
    },
    {
      "x": 0
    },
    {
      "x": 0
    }
  ]  
},
plotOptions: {
      series: {
          pointPadding: 0,
          borderWidth: 1
      }
  },
tooltip: {
      shared: true
  },
"series": [
  {
    "index": 0,
    color: "#A8C3CA",
     "tooltip": {
      "pointFormatter": function(){
        return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
      }
    }   
  },
  {
    "index": 1,
    "type": "errorbar",
    "tooltip": {
      "pointFormatter": function(){
        return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)<br/>';
      },
    }
  },
  {
    "index": 2,
    color: "#246370",
     "tooltip": {
      "pointFormatter": function(){
        return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
      }
    }   
  },
  
 {
    "index": 3,
    "type": "errorbar",
    "tooltip": {
      "pointFormatter": function(){
        return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)<br/>';
      },
    }
  }
  
],  
"xAxis": {
 "type": "category"    
},
"yAxis": {
  tickInterval: 10,
  "labels": {
    
      "formatter": function(){
          return Highcharts.numberFormat((this.value),0)+'%';                
      },
  },

},    
"legend": {
  "enabled": true,
  itemDistance: 5,
  "layout": "horizontal",
  "verticalAlign": "top",
  "align": "left",
  "itemStyle": {
    "fontWeight": "normal"
  }
},
"chart": {    
  "marginBottom": 65,
  //"marginTop": 75,
  "type": "column",
  "inverted": true
}, 
subtitle: {
  useHTML: true
}, 
exporting: {
  allowHTML: true,
},
};
}());










