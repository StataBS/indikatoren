(function(){
    return {
 "xAxis": {
    "tickInterval": 4,
     "type": "category",
     labels:{
     		"formatter": function() {
   			 return this.value.split("-").slice(0, -1);
		},
     }
  },
  "yAxis": {
	"labels": {
		"format": "{value:,.0f}",
		"formatter": function(){
        return Highcharts.numberFormat((this.value),0)+''; 
      },
	}
  },	
  tooltip: {
  "pointFormatter": function(){
      return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),0) + ' </b><br/><b>' 
    },
  },
 "series": [
 	{"color": "#923F8D","index": 1}, /**/
	{"color": "#008AC3", "index": 1}, /**/	  
	  ],
  "legend": {
    "enabled": true,
    "y": 45,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "plotOptions": {
    "line": {
      "marker":{
        "enabled": false,
        "symbol": "circle",
      } 
    }
  }
}
}());