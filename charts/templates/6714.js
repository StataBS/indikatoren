(function(){
    return {
 	"xAxis": {
        "type": "category",
        "labels": {
           align: "left",
           x:-70,
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
  	tickInterval: 25,
  	max: 100,
  	labels:{
  		y:10,
  		"type": "category",
  		rotation: 0,
  	}
  },
  plotOptions: {
  	  "series": {
      "pointWidth": 20,
  	  },
  	column: {
  		groupPadding: 0,

  	}
  },
  "series": [
    { "color": "#999999", index: 0, legendIndex: 4}, // grau
    { "color": "#dc440e", index: 1, legendIndex: 3}, // rot
    { "color": "#ffbb58", index: 2, legendIndex: 2}, // orange
    { "color": "#68ab2b", index: 3, legendIndex: 1}, // grün
    { "color": "#007a2f", index: 4, legendIndex: 0}, // dunkelgrün
  ],
"legend": {
    enabled:true,
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 5, // space between legend boxes
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
"chart": {    
	//marginLeft: 75, 
	 //marginLeft: 150, 
	 //marginBottom: 100,
     "inverted": true,
      //"height": 500,
  },
}
}());
