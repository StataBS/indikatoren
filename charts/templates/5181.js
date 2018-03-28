(function(){
    return {
    "yAxis":{
        tickInterval:25,
    },
 	"xAxis": {
        "type": "category",
        "labels": {
		  align: "left",
          x: -110,
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
      plotOptions: {
      	column: {
      		groupPadding: 0,
    
      	}
      },
      "series": [
      {"color": "#923F8D", "index": 9, "legendIndex":0}, /*grün dunkel2*/
      {"color": "#B375AB", "index": 8, "legendIndex":1}, /*grün mittel*/
      {"color": "#FABD24", "index": 7, "legendIndex":2}, /*grün dunkel1*/
      {"color": "#008AC3", "index": 6, "legendIndex":3}, /*grün hell*/
      {"color": "#999999", "index": 5, "legendIndex":4}, /*blau hell */
      ],
    "chart": {      
    	 marginLeft: 125,
         "inverted": true,
      },
    "legend": {
        "layout": "vertical",
        "verticalAlign": "middle",
        "itemMarginBottom": 5,     
        "align": "right",
        "useHTML": false,
        "itemStyle": {
            "fontWeight": "normal"
        },
        "symbolRadius": 0,
        "labelFormatter": function () {
            return this.name.replace('/', '/<br/>');
        }
    }
    };
}());
