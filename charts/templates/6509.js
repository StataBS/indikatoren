(function () {
    return {
        chart: {
            inverted: true,
            height:600,
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
                      var formattedSum = Highcharts.numberFormat(sum, 0, ",", "")
                    //delete everything before ":", including ":"
                    this.value = this.value.replace(/[^:]*:/, "");
  
                    //check for value that contains only spaces
                    if (formattedSum != 0) return (this.value.replace(/\s/g, "") == "") ? this.value : this.value + ' (' + nString + formattedSum + ')';
                    //else, if sum = 0, then it is assumed to be an intermediate title. return it bold
                    return "<b>" + this.value + "</b>";
                    
                }
            }
        },
        "legend": {
          "enabled": true,
          "layout": "horizontal",
          "verticalAlign": "top",
          "itemMarginBottom": 5,
          "align": "left"
        },
  
    "series": [
      { "color": "#007a2f", index: 6, legendIndex: 0}, // dunkelgrün
      { "color": "#68ab2b", index: 5, legendIndex: 1}, // grün
      { "color": "#FABD24", index: 4, legendIndex: 2}, // gelb
      { "color": "#DC440E", index: 3, legendIndex: 3}, // orange
      { "color": "#C8C8C8", index: 1, legendIndex: 5}, // hellgrau
      { "color": "#6F6F6F", index: 0, legendIndex: 6}, // dunkelgrau
  
    ],
  }
  }());