(function () {
    return {
        chart: {
            //marginLeft: 125,
            inverted: true,
        },
        plotOptions: {
            column: {
                groupPadding: 0,
                pointPadding: 0.2
            }
        },
        yAxis: {
            tickInterval: 25,
        },
        xAxis: {
            type: "category",
            labels: {
                align: "right",
                //x: -110,
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
                    var nString = (this.chart.series.length == allVisibleSeries.length) ? 'N=' : 'n=';
                    //check for value that contains only spaces
                    return (this.value.replace(/\s/g, "") == "") ? this.value : this.value + ' (' + nString + sum + ')';
                }
            }
        },
        series: [
            { "color": "#689199", "index": 3, "legendIndex": 1 },
            { "color": "#FABD24", "index": 2, "legendIndex": 2 },
            { "color": "#C8C8C8", "index": 1, "legendIndex": 3 },
            { "color": "#6F6F6F", "index": 0, "legendIndex": 4 },
        ],
        legend: {
            "layout": "horizontal",
            "verticalAlign": "top",
            "align": "left",
            itemWidth: 100,
            "itemStyle": {
                textOverflow: "none",
                whiteSpace: "nowrap",
              }
        }
    };
}());
