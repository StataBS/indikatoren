(function(){
    return {
 	"xAxis": {
        "type": "category",
        "labels": {
           align: "left",
            x: -135,
            y: 3,
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
                var category = this.value.replace("und weitere", "u.a.");
                //check for value that contains only spaces
            	return (category.replace(/\s/g,"") == "") ? category : category + ' (' + nString + sum + ')';
            }
        } 
  },  
  yAxis:{
  	tickInterval: 50,
  	max: 100,
  	labels:{
  		y: 15,
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
    { "color": "#6F6F6F", index: 0, legendIndex: 6}, // dunkelgrau

  ],
"chart": {     
	 marginLeft: 140, 
	 marginRight: 5,
     "inverted": true,
  },
  "legend": {
    x: -1,
    margin: 10,
    padding: 1,
    itemDistance: 1,
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    //width: 320,
    symbolPadding: 1,
    "itemStyle": {
        "fontWeight": "normal",
        textOverflow: "none", 
    },
  },
};
}());
