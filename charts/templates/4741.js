var chartOptions = {
  "plotOptions": {
    "series": {
      "pointWidth": 15,
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      }
    },
    "column": {
        "colorByPoint": true
    }
  },
  "series": [
    {
      "index": 0,
      "tooltip": {
        "pointFormatter": function(){
          return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y*100),1) + '%</b><br/>';
        }
      }      
    },
    {
      "index": 1,
      "type": "errorbar",
      "tooltip": {
        "pointFormatter": function(){
          return this.series.name + ': <b>' + Highcharts.numberFormat((this.low*100),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high*100),1) + '%</b><br/>';
        }
      }
    }
  ],  
  "colors": [
    "#B475AB",
    "#B475AB",
    "#B475AB",
    "#73BA7C",
    "#A8C4CB",
    "#B475AB",
    "#73BA7C",
    "#B475AB",
    "#B475AB",
    "#B475AB",        
    "#B475AB"
  ],  
  "xAxis": {
    "type": "category"    
  },
  "yAxis": {
    "labels": {
        "formatter": function(){
            return Highcharts.numberFormat((this.value*100),0)+'%';                
        },
    } 
  },    
  "legend": {
    "enabled": false
  },
  "chart": {    
    "marginBottom": 65,
    "marginTop": 75,
    "type": "column",
    "inverted": true
  }
};
