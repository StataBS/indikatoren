(function(){
    return {
    "yAxis":{
    tickInterval:20,
    },
   
 	"xAxis": {
        "type": "category",
        "labels": {
            "formatter": function() {
                  	 return this.value;
            }
        } 
  },  
  plotOptions: {
  	column: {
  		groupPadding: 0,
  	}
  },
 "series": [
	 {"color": "#D3E2E4", index: 0, legendIndex: 0}, /* */
	 {"color": "#689199", index: 1, legendIndex: 1}, /* */
	 {"color": "#2F656B", index: 2, legendIndex: 2},  /* */
	 {"color": "#083038", index: 3, legendIndex: 3},  /* */
     ],
  "legend": { 
     y: 25,
    "enabled": true,
    "layout": "horizontal",
    "itemWidth": 200,
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
"chart": {  
	spacingBottom: 45,
     "inverted": false,
  },
      tooltip: {
        valueDecimals: 0
      },
}
}());
