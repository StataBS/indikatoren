(function(){
    return {
 	"xAxis": {
        "type": "category",
        "labels": {
           rotation: -90,
           align: "left",
            y: 110,
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
  	}
  },
  plotOptions: {
  	column: {
  		groupPadding: 0,

  	}
  },
  "series": [
    { "color": "#246370", index: 4, legendIndex: 4}, // 
    { "color": "#A8C3CA", index: 3, legendIndex: 3}, // 
    { "color": "#FABD24", index: 2, legendIndex: 2}, // 
    { "color": "#999999", index: 0, legendIndex: 0}, // 
  ],
  "legend": { 
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    alignColumns: false, 
    itemDistance: 15, 
     "labelFormatter": function () {
        return this.name;
    },
    "itemStyle": {
        "fontWeight": "normal", 
        textOverflow: null, 
        whitespace: 'nowrap'
    }
  },

"chart": { 
	  marginBottom: 110,
     "inverted": false,
         width: 665, 
  },
}
}());
