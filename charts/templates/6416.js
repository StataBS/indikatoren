/*  
global Highcharts
*/

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
      }
    ]  
  },
	plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0
        }
    },
    "series": [
    {
      "index": 0,
      color: "#B375AB",
      "tooltip": {
        "pointFormatter": function(){
          return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((100 * this.y),1) + '%</b><br/>';
        }
      }
    },
    {
      "index": 1,
      "type": "errorbar",
      "tooltip": {
        "pointFormatter": function(){
          return this.series.name + ': <b>' + Highcharts.numberFormat((100 * this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((100 * this.high),1) + '%</b><br/>';
        }
      }
    }
  ],  
  "xAxis": {
    "type": "category"    
  },
  "yAxis": {
    "labels": {
        "formatter": function(){
            return Highcharts.numberFormat((100 * this.value),0)+'%';                
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
}());
