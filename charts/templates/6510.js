(function () {
    return {
        chart: {
            inverted: true,
            height:550,
        },
        plotOptions: {
            column: {
                groupPadding: 0,
            }
        },
        yAxis: {
            tickInterval: 20,
        },
        xAxis: {
            type: "category",
            labels: {
                formatter: function () {
                    //add sum of observations of visible series to the axis label
                    var allVisibleSeries = this.chart.series.filter(function (val, i, arr) {
                        return val.visible;
                    });
                    var indexOfCurrentValue = this.axis.names.indexOf(this.value);
                    var sum = allVisibleSeries.reduce(function (accumulator, series, index, arr) {
                        return accumulator + series.yData[indexOfCurrentValue];
                    }, 0);
                    //use N if all series are visible, otherwise use n
                    var nString =  'n=';
                      if (this.value.match(/Total/)) nString = (this.chart.series.length == allVisibleSeries.length) ? 'N=' : 'n=';
  
                    //delete everything before ":", including ":"
                    this.value = this.value.replace(/[^:]*:/, "");
  
                    //check for value that contains only spaces
                    if (sum != 0) return (this.value.replace(/\s/g, "") == "") ? this.value : this.value + ' (' + nString + sum + ')';
                    //else, if sum = 0, then it is assumed to be an intermediate title. return it bold
                    return "<b>" + this.value + "</b>";
                }
            }
        },
        "legend": {
          "enabled": true,
          reversed: true,
          "layout": "horizontal",
          "verticalAlign": "top",
          "itemMarginBottom": 5,
          "align": "left"
        },
  
        "series": [
            { "color": "#246370", index: 4, legendIndex: 4}, // 
            { "color": "#A8C3CA", index: 3, legendIndex: 3}, // 
            { "color": "#FABD24", index: 2, legendIndex: 2}, // 
            { "color": "#C8C8C8", index: 1, legendIndex: 1}, // grau
            { "color": "#6F6F6F", index: 0, legendIndex: 0}, // grau
          ],
  }
  }());
  /*"series": [
    { "color": "#246370", index: 4, legendIndex: 4}, // 
    { "color": "#A8C3CA", index: 3, legendIndex: 3}, // 
    { "color": "#FABD24", index: 2, legendIndex: 2}, // 
    { "color": "#C8C8C8", index: 1, legendIndex: 1}, // grau
    { "color": "#6F6F6F", index: 0, legendIndex: 0}, // grau
  ],
  "legend": { 
    "enabled": true,
    "layout": "horizontal",
    "itemWidth": 140,
    "verticalAlign": "top",
    "align": "left",
    reversed: true,
     "labelFormatter": function () {
            return this.name;
        },
    itemStyle: {
        fontWeight: "normal", 
        textOverflow: null, 
        whiteSpace: 'nowrap'
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
*/