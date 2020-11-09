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
      reversedStacks: false,
  	max: 100,
  	labels:{
  		"type": "category",
  		rotation: 0,
  	}
  },
  plotOptions: {
  	series:{
  			 "pointWidth": 70,
  	},
  	column: {
  		groupPadding: 0,
   	}
  },
  "series": [
    {"color": "#256370"},
    {"color": "#71A3B5"},
    {"color": "#FFBB58"},
    {"color": "#FF8028"},
    {"color": "#C8C8C8"},
    {"color": "#8A8A8A"}        
],
  legend: {
    enabled:true,
    reversed: true,
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 5, // space between legend boxes
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
"chart": {     
     "inverted": false,
  },
};
}());