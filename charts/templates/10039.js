(function(){
  return {
//seriesMapping necessary for charts with error bars. 
"data": {
  /*keys: ['x', 'category', 'y1', 'y2'],*/
  "seriesMapping": [
    {
      "x": 0 /*1*/
    },
    {
      "x": 0, /*2*/
    },
    {
      "x": 0 /*3*/
    },
    {
      "x": 0 /*4*/
    },
    {
      "x": 0 /*5*/
    },
    {
      "x": 0 /*6*/
    },
    {
      "x": 0 /*7*/
    },
    {
      "x": 0 /*8*/
    },
    {
      "x": 0 /*9*/
    },
    {
      "x": 0 /*10*/
    },
    {
      "x": 0 /*11*/
    },
    {
      "x": 0 /*12*/
    },
    {
      "x": 0 /*13*/
    },
    {
      "x": 0 /*14*/
    },
    {
      "x": 0 /*15*/
    }  /*, 
    
    {
      "x": 0 /*16*
    },
    {
      "x": 0 /*17*
    },
    
    {
      "x": 0 /*18*
    }, 
   
    {
      "x": 0 /*19
    },
    {
      "x": 0 /*20
    },
    {
      "x": 0 /*21
    },
    {
      "x": 0, /*22
    },
    {
      "x": 0 /*23*
    },
    {
      "x": 0 /*24*
    },
    {
      "x": 0 /*25*
    },
    {
      "x": 0 /*26*
    },
    {
      "x": 0 /*27*
    },
    {
      "x": 0 /*28*
    },
    {
      "x": 0 /*29*
    },
    {
      "x": 0 /*30*
    },
    {
      "x": 0 /*31*
    },
    {
      "x": 0 /*32*
    },
    {
      "x": 0 /*33*
    },
    {
      "x": 0 /*34*
    },
    {
      "x": 0 /*35*
    },
    {
      "x": 0 /*36*
    },
    {
      "x": 0 /*37*
    },
    {
      "x": 0 /*38*
    },
    {
      "x": 0 /*39*
    },
    {
      "x": 0 /*40*
    } 
    */
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
  shared: false
  /*
      tooltip: {
    formatter: function() {
        var series = this.series.chart.series,
            str = '<b>'+ this.x +'</b><br/>',
            j = this.point.x,
            i;
        
        for(i=0; i<series.length; i++) {
            if (series[i].name === 'Y Values' || series[i].name === 'Confidence Intervals') {
                str += '<span style="color:'+series[i].color+'">'+series[i].name+'</span>: '+series[i].data[j].y+'<br/>';
            }
        }
        return str;
    }
}
     */ 
  }, 
  "series": [
    {
      "index": 0,
      color: "#C4AB91",
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
      color: "#A8C3CA", /* 73B97C */
     /* visible: false, */
       "tooltip": {
        "pointFormatter": function(){
          return /*'<br/>' +*/ '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
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
      "index": 4,
      color: "#008AC3", 
       "tooltip": {
        "pointFormatter": function(){
          return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
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
      color: "#FF8028",
   
       "tooltip": {
        "pointFormatter": function(){
          return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
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
        "index": 8,
        color: "#B00000",
         "tooltip": {
          "pointFormatter": function(){
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
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
        color: "#662673",
  
         "tooltip": {
          "pointFormatter": function(){
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 11,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function(){
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)<br>';
          }
        }
      },
      {
        "index": 12,
        color: "#FFBB58", /* FABD24 CD9C00*/ 
         "tooltip": {
          "pointFormatter": function(){
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 13,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function(){
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)<br>';
          }
        }
      },
      {
        "index": 14,
        color: "#B375AB",
        
         "tooltip": {
          "pointFormatter": function(){
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 15,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function(){
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)<br>';
          }
        }
      } /*,
      
      {
        "index": 16,
        color: "#FABD24",
         "tooltip": {
          "pointFormatter": function(){
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 17,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function(){
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)<br>';
          }
        }
      },
      
      {
        "index": 18,
        color: "#CD9C00",
        visible: false,
         "tooltip": {
          "pointFormatter": function(){
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 19,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function(){
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)<br>';
          }
        }
      },
      {
        "index": 20,
        color: "#73B97C",
         "tooltip": {
          "pointFormatter": function(){
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 21,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function(){
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)<br>';
          }
        }
      },
      {
        "index": 22,
        color: "#68AB2B",
        visible: false,
         "tooltip": {
          "pointFormatter": function(){
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 23,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function(){
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)<br>';
          }
        }
      },
      {
        "index": 24,
        color: "#C8C8C8",
        
         "tooltip": {
          "pointFormatter": function(){
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 25,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function(){
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)<br>';
          }
        }
      },
      {
        "index": 26,
        color: "#8A8A8A",
        visible: false,
         "tooltip": {
          "pointFormatter": function(){
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 27,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function(){
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)<br>';
          }
        }
      },
      {
        "index": 28,
        color: "#008AC3",
       
         "tooltip": {
          "pointFormatter": function(){
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 29,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function(){
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)<br>';
          }
        }
      },
      {
        "index": 30,
        color: "#2B0099",
        visible: false,
         "tooltip": {
          "pointFormatter": function(){
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 31,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function(){
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)<br>';
          }
        }
      },
      {
        "index": 32,
        color: "#8B2223",
     
         "tooltip": {
          "pointFormatter": function(){
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 33,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function(){
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)<br>';
          }
        }
      },
      {
        "index": 34,
        color: "#661200",
        visible: false,
         "tooltip": {
          "pointFormatter": function(){
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
      {
         "index": 35,
         "type": "errorbar",
         "tooltip": {
           "pointFormatter": function(){
             return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)<br>';
           }
         }
       },
       {
         "index": 36,
         color: "#7F5F1A",
      
          "tooltip": {
           "pointFormatter": function(){
             return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
           }
         }   
         
       },
      {
         "index": 37,
         "type": "errorbar",
         "tooltip": {
           "pointFormatter": function(){
             return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)<br>';
           }
         }
       },
       {
        "index": 38,
        color: "#45381D",
        visible: false,
         "tooltip": {
          "pointFormatter": function(){
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 39,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function(){
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)<br>';
          }   
        }
      } */ 
   
],  
"xAxis": {
  "type": "category"    
},
"yAxis": {
  /*tickAmount: 6, */
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
  layout: "horizontal",
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










