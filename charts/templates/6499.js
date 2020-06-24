(function(){
    return {
 	"xAxis": {
        "type": "category",
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
  	column: {
  		groupPadding: 0,

  	}
  },
  "series": [
    { "color": "#007a2f", index: 5, legendIndex: 0}, // dunkelgrün
    { "color": "#68ab2b", index: 4, legendIndex: 1}, // grün
    { "color": "#ffbb58", index: 3, legendIndex: 2}, // orange
    { "color": "#dc440e", index: 2, legendIndex: 3}, // rot
    { "color": "#C8C8C8", index: 1, legendIndex: 4}, // grau
    { "color": "#6F6F6F", index: 0, legendIndex: 5}, // grau
  ],
  "legend": { 
  	 //x:-5,
     //y: 35,
    "enabled": true,
    itemWidth: 150,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
        fontWeight: "normal",
        textOverflow: null,
        whiteSpace: "nowrap",
    }, 
    labelFormatter: function () {
        return this.name;
    }

  },

"chart": {     
	 marginLeft: 150, 
	 //marginBottom: 100,
     "inverted": true,
      "height": 550,
  },
}
}());