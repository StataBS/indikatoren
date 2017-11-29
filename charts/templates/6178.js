(function(){
    return {
        yAxis:{
        	tickInterval: 25,
        },
    	"xAxis": {
            "type": "category",
            "labels": {
            	align: "left",
            	x: -125,
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
                    var nString = /*(this.chart.series.length == allVisibleSeries.length) ? 'N=' :*/ 'n='; 
                    //check for value that contains only spaces
                	return (this.value.replace(/\s/g,"") == "") ? this.value : this.value + ' (' + nString + sum + ')';
                }
            } 
        }, 
      "series": [
    { "color": "#007a2f", index: 4, legendIndex: 4}, // dunkelgrün
    { "color": "#68ab2b", index: 3, legendIndex: 3}, // grün
    { "color": "#ffbb58", index: 2, legendIndex: 2}, // orange
    { "color": "#dc440e", index: 1, legendIndex: 1}, // rot
    { "color": "#999999", index: 0, legendIndex: 0}, // grau
      ],
    "chart": {      
    	  marginLeft: 140,
         "inverted": true,
      },
    };
}());
