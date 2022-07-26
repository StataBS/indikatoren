(function(){
    return {
 	"xAxis": {
        "type": "category",
        "labels": {
           //align: "left",
            //x: -125,
            "formatter": function() {
                //add sum of observations of visible series to the axis label
                var allVisibleSeries = this.chart.series.filter(function(val, i, arr){
                    return val.visible;
                });
                var indexOfCurrentValue = this.axis.names.indexOf(this.value);
                var sum = allVisibleSeries.reduce(function(accumulator, series, index, arr){
                    return accumulator + series.yData[indexOfCurrentValue];
                }, 0);
                //use N if all series are visible, otherwise use n
                var nString = (this.chart.series.length == allVisibleSeries.length) ? 'N=' : 'n='; 
                //check for value that contains only spaces
            	return (this.value.replace(/\s/g,"") == "") ? this.value : this.value + ' (' + nString + sum + ')';
            }
        } 
  },  
  yAxis:{
  	tickInterval: 20,
  	max: 100,
  	labels:{
  		"type": "category",
  		rotation: 0,
  	}
  },
  plotOptions: {
  	series:{
  			 "pointWidth": 80,
  	},
  	column: {
  		groupPadding: 0,
 


  	}
  },
  "series": [
    { "color": "#B00000", index: 3, legendIndex: 0}, // 
    { "color": "#FABD24", index: 2, legendIndex: 1}, // 
    { "color": "#999999", index: 0, legendIndex: 2}, // 
  ],
  legend: {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5, // space between legend boxes
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
"chart": {     
     "inverted": false,
  },
};
}());
