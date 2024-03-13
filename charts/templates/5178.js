(function () {
    return {
        "chart": {
            marginLeft: 200,
            inverted: true,
            height: 700,
        },
        plotOptions: {
            series: {
                pointPadding: 0.05,
                groupPadding: 0.02,
                borderWidth: 0,
                shadow: false,
                //pointWidth: 20,
            }
        },
        "yAxis": {
            tickInterval: 25,
        },
        "xAxis": {
            "type": "category",
            min: 0,
            max: 34,
            "labels": {
                align: "left",
                x: -190,
                "formatter": function () {
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

                    var txt = this.value
                        .replace("mögl.", "m.")
                        .replace("im ", "")
                        .replace("am ", "")
                        .replace("in ", "")
                        .replace("versorgung", "vers.");

                    //check for value that contains only spaces
                    return (txt.replace(/\s/g, "") == "") ? txt : txt + ' (' + nString + sum + ')';
                }
            }
        },
        "series": [
            { "color": "#007A2F", index: 5, legendIndex: 1 }, /*dunkelgrün*/
            { "color": "#73B97C", index: 4, legendIndex: 2 }, /*hellgrün*/
            { "color": "#FABD24", index: 3, legendIndex: 3 }, /*hellrot*/
            { "color": "#CD9C00", index: 2, legendIndex: 4 }, /*dunkelrot*/
            { "color": "#C8C8C8", index: 1, legendIndex: 5 },
            { "color": "#6F6F6F", index: 0, legendIndex: 6 },
        ],
        "legend": {
            "layout": "horizontal",
            "verticalAlign": "top",
            "align": "left",
            padding: 0,
            itemDistance: 5,
        }
    };
}());
