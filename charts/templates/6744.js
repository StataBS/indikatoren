(function(){
    return {
 	"xAxis": {
        "type": "category",
        "labels": {
           align: "left",
            x: -180,
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
  		style:{
  			 textOverflow: 'none' // prevents ellipsis
  		}
  	}
  },
  plotOptions: {
  	column: {
  		groupPadding: 0,

  	}
  },
  "series": [
    { "color": "#007a2f", index: 6, legendIndex: 0}, // dunkelgrün
    { "color": "#68ab2b", index: 5, legendIndex: 1}, // grün
    { "color": "#FABD24", index: 4, legendIndex: 2}, // gelb
    { "color": "#DC440E", index: 3, legendIndex: 3}, // orange
    { "color": "#C8C8C8", index: 1, legendIndex: 5}, // hellgrau

  ],
"chart": {     
	 marginLeft: 195, 
	 //marginBottom: 100,
     "inverted": true,
  },
  "legend": { 
    "enabled": true,
    "layout": "horizontal",
    alignColumns: false, 
    itemDistance: 5, 
    padding: 0,
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
}
}());
