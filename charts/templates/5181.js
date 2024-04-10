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
                var formattedSum = Highcharts.numberFormat(sum, 0, ",", "")
                //check for value that contains only spaces
            	return (this.value.replace(/\s/g,"") == "") ? this.value : this.value + ' (' + nString + formattedSum + ')';
            }
        } 
      },  
      plotOptions: {
      	column: {
      		groupPadding: 0,
    
      	}
      },
      "series": [
      {"color": "#923F8D", "index": 5, "legendIndex":1}, /*grün dunkel2*/
      {"color": "#B375AB", "index": 4, "legendIndex":2}, /*grün mittel*/
      {"color": "#FABD24", "index": 3, "legendIndex":3}, /*grün dunkel1*/
      {"color": "#008AC3", "index": 2, "legendIndex":4}, /*grün hell*/
      { "color": "#C8C8C8", "index": 1, "legendIndex": 5 },
      { "color": "#6F6F6F", "index": 0, "legendIndex": 6 },
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
