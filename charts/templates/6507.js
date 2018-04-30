(function(){
    return {
 	"xAxis": {
        "type": "category",
        uniqueNames: false,
        "labels": {
           align: "left",
            x: -140,
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
                //check for value empty values
            	return (this.value == "undefined") ? "" : this.value + ' (' + nString + sum + ')';
            }
        } 
  },  
  yAxis:{
  	tickInterval: 20,
  	max: 100,
  	labels:{
  		rotation: 0,
  	}
  },
  plotOptions: {
  	column: {
  		groupPadding: 0,

  	}
  },
  "series": [
    { "color": "#007a2f", index: 4, legendIndex: 0}, // dunkelgrün
    { "color": "#68ab2b", index: 3, legendIndex: 1}, // grün
    { "color": "#ffbb58", index: 2, legendIndex: 2}, // orange
    { "color": "#dc440e", index: 1, legendIndex: 3}, // rot
    { "color": "#999999", index: 0, legendIndex: 4}, // grau
  ],
  "legend": { 
    "enabled": true,
    "layout": "horizontal",
   "itemWidth": 150,
    "verticalAlign": "top",
    "align": "left",
     "labelFormatter": function () {
            return this.name;
        },
    "itemStyle": {
    "fontWeight": "normal"
    }
  },

"chart": {     
	 marginLeft: 150, 
	 //marginBottom: 100,
     "inverted": true,
      "height": 500,
  },
}
}());
