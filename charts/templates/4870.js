(function(){
    return {
    "series": [
        {
            "color": "#71A3B5", 
            "index": 2            
        },
        {
            "color": "#FFBB58", 
            "index": 0
        },
        {
            "color": "#8A8A8A", 
            "index": 1
        }        
  ],
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
            	return this.value.replace(" ", "<br/>") + '<br/>(' + nString + sum + ')';
            }
        } 
  },
  "legend": {
      "reversed": false
  }
};
}());

 