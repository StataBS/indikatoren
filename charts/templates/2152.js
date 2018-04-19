(function(){
    return {
  plotOptions: {
        series: {
        	"stacking": "normal",
             groupPadding: 0,
        }
  },
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}",
    }
  },
  "xAxis": {
  	"type": "category",
    "tickInterval": 4,
     labels:{
     		"formatter": function() {
   			 return this.value.split("-").slice(0, -1);
		},
     }  
  },
 "legend": { 
     //y: 45,
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
    "fontWeight": "normal"
    }
  },


 "series": [
   	 {"color": "#008AC3", index: 5, legendIndex: 0}, /* */
	 {"color": "#662673", index: 4, legendIndex: 1}, /* */
	 {"color": "#689199", index: 3, legendIndex: 2},  /* */
	 {"color": "#B375AB", index: 2, legendIndex: 3},  /* */
	 {"color": "#A8C3CA", index: 1, legendIndex: 4}, /* */
	 {"color": "#E7CEE2", index: 0, legendIndex: 5}, /* */
  ],
 tooltip: {
  "pointFormatter": function(){
      return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),0) + ' </b><br/><b>' 
    },
  },  
  "chart": {
  	//height: 600,
  	type: "column",
    "inverted": false,
  }
};
}());





