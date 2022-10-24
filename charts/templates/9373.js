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
      },
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
      },
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
            pointPadding: 0.1,
            groupPadding: 0.1,
            borderWidth: 0
        }
    },
  tooltip: {
        shared: true
    },
  "series": [
    {
      "index": 4,
      color: "#008AC3",
       "tooltip": {
        "pointFormatter": function(){
          return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
        }
      }   
    },
    {
      "index": 5,
      "type": "errorbar",
      "tooltip": {
        "pointFormatter": function(){
          return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)';
        },
      }
    },
        {
      "index": 6,
      color: "#A0BEC8",
      visible: false,
       "tooltip": {
        "pointFormatter": function(){
          return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
        }
      }   
      
    },
   {
      "index": 7,
      "type": "errorbar",
      "tooltip": {
        "pointFormatter": function(){
          return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)';
        }
      }
    },
    {
        "index": 0,
        color: "#FABD24",
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
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)';
          }
        }
      },
      {
        "index": 2,
        color: "#FFDA80",
        visible: false,
         "tooltip": {
          "pointFormatter": function(){
            return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 3,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function(){
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)';
          }
        }
      },
      {
        "index": 8,
        color: "#923F8D",
         "tooltip": {
          "pointFormatter": function(){
            return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 9,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function(){
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)';
          }
        }
      },
      {
        "index": 10,
        color: "#B375AB",
        visible: false,
         "tooltip": {
          "pointFormatter": function(){
            return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 11,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function(){
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)';
          }
        }
      }
    
  ],  
  "xAxis": {
    "type": "category"    
  },
  "yAxis": {
    tickAmount: 6,
    "labels": {
        "formatter": function(){
            return Highcharts.numberFormat((this.value),0)+'%';                
        },
    },
    tickDistance: 10, 
  },    
   "legend": {
    "enabled": true,
     itemDistance: 0,
     width: 500,
     itemWidth: 230,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal",
      textOverflow: "none"
    }
  },
  "chart": {    
    "marginBottom": 65,
    "type": "column",
    //"inverted": true
  }, 
  subtitle: {
    useHTML: true
  }, 
  exporting: {
    allowHTML: true,
  },
  };
  }());
  
  
  
  
  
  
  
  
  
  
  