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
  "series": [
    {
      "index": 0,
      color: "#661200",
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
    },
        {
      "index": 2,
      color: "#dc440e",
       "tooltip": {
        "pointFormatter": function(){
          return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((100 * this.y),1) + '%</b><br/>';
        }
      }   
      
    },
   {
      "index": 3,
      "type": "errorbar",
      "tooltip": {
        "pointFormatter": function(){
          return this.series.name + ': <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((100 * this.high),1) + '%</b><br/>';
        }
      }
    },
         {
      "index": 4,
      color: "#7f5f1a",
       "tooltip": {
        "pointFormatter": function(){
          return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((100 * this.y),1) + '%</b><br/>';
        }
      }   
    },
    {
      "index": 5,
      "type": "errorbar",
      "tooltip": {
        "pointFormatter": function(){
          return this.series.name + ': <b>' + Highcharts.numberFormat((100 * this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((100 * this.high),1) + '%</b><br/>';
        }
      }
    },
         {
      "index": 6,
      color: "#ffda80",
       "tooltip": {
        "pointFormatter": function(){
          return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((100 * this.y),1) + '%</b><br/>';
        }
      }   
    },
        {
      "index": 7,
      "type": "errorbar",
      "tooltip": {
        "pointFormatter": function(){
          return this.series.name + ': <b>' + Highcharts.numberFormat((100 * this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((100 * this.high),1) + '%</b><br/>';
        }
      }
    },
    
  ],  
  "xAxis": {
    "type": "category",
    labels: {
      formatter: function(){
        return this.value.replace(" Jahre", "");
      }
    }
  },
  "yAxis": {
    tickInterval: 0.25,
    "labels": {
        "formatter": function(){
            return Highcharts.numberFormat((100 * this.value),0)+'%';                
        },
    } 
  },    
   "legend": {
    "enabled": true,
    padding: 1,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "chart": {    
    "type": "column",
    "inverted": false
  },
plotOptions: 
	{ series: 
		{ 
		pointPadding: 0, 
		groupPadding: 0.1, 
		borderWidth: 0,
		} 
	},
	};
}());