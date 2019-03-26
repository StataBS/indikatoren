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
         x: 15,
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
	 {"color": "#8B2223", index: 4, legendIndex: 1}, /* */
	 {"color": "#689199", index: 3, legendIndex: 2},  /* */
	 {"color": "#DC440E", index: 2, legendIndex: 3},  /* */
	 {"color": "#A8C3CA", index: 1, legendIndex: 4}, /* */
	 {"color": "#FF8028", index: 0, legendIndex: 5}, /* */
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





