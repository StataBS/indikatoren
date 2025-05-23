(function () {
    return {
        chart: {
            inverted: true,
            width: 665
            //height:520,
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
            min:0,
            max:8,        
            /*labels: {
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
            }*/
        },
        "legend": {
          "enabled": true,
          "layout": "vertical",
          "verticalAlign": "middle",
          "itemMarginBottom": 5,
          "align": "right"
        },
  
    "series": [
      { "color": "#007a2f", index: 4, legendIndex: 0}, // dunkelgrün
      { "color": "#ffbb58", index: 3, legendIndex: 1}, // orange
      { "color": "#DC440E", index: 2, legendIndex: 2}, // rot
      { "color": "#C8C8C8", index: 1, legendIndex: 3}, // hellgrau
      { "color": "#6F6F6F", index: 0, legendIndex: 4}, // dunkelgrau

    ],
  }
  }());




 