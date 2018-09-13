(function(){
    return {
 	"xAxis": {
        "type": "category",
        "labels": {
           //align: "left",
           x: -6,
           y: 10,
           rotation: -90,
           useHTML: false,
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
            	return (this.value.replace(/\s/g,"") == "") ? this.value : this.value + '<br/>(' + nString + sum + ')';
            }
        } 
  },  
  yAxis:{
  	tickInterval: 25,
  	max: 100,
  	labels:{
  		//y: 10,
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
    { "color": "#007a2f", index: 4, legendIndex: 0}, // dunkelgrün
    { "color": "#68ab2b", index: 3, legendIndex: 1}, // grün
    { "color": "#ffbb58", index: 2, legendIndex: 2}, // orange
    { "color": "#dc440e", index: 1, legendIndex: 3}, // rot
    { "color": "#999999", index: 0, legendIndex: 4}, // grau
  ],
"legend": {
    enabled: true,
    reversed: true,
    y: -4,
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 5, // space between legend boxes
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
"chart": {    
	 marginLeft: 75,
	 spacingBottom: 4,
	 spacingTop: 5,
	 //marginRight: 5,
	 //marginBottom: 100,
     "inverted": false,
      //"height": 500,
      width: 665,
  },
};
}());
