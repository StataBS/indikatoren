/*
    global Highcharts
*/

(function () {
    return {
        data: {
            parsed: function (columns) {
                //Negate the numbers in the the 2nd column to create the left side of the population pyramid
                var negateNumbersInColumn = function (columnIndex) {
                    columns.forEach(function (column, i, c) {
                        if (i == columnIndex) {
                            column.forEach(function (item, j, v) {
                                if (typeof (item) == 'number') {
                                    v[j] = -v[j];
                                }
                            });
                        }
                    });
                };
                negateNumbersInColumn(1);
            }
        },
        plotOptions: {
            series: {
                minPointLength: 1.5
            }
        },
        tooltip: {
            pointFormatter: function () {
                return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>'+ Highcharts.numberFormat( this.series.name == 'Saldo' ? this.y : Math.abs(this.y), 0, ",", " ") + '</b><br/>';
            }
        },
        yAxis: [{
            max: 18000,
            tickInterval: 6000,
            min: 0,
            title: {
                text: null
            },
            labels: {
                formatter: function () {
                    return Highcharts.numberFormat(Math.abs(this.value), 0, ",", "\u00a0");
                },
                style: {
                    color: "#000000",
                    textOverflow: 'none'
                }
            },
            plotLines: [{
                value: 0,
                color: 'white',
                width: 1,
                zIndex: 4
            }],
            //create symmetric xAxis
            events: {
                afterSetExtremes: function (args) {
                    this.chart.options.customFunctions.createSymmetricAxis(this);
                },
            }
        }],
        xAxis: [{
            reversed: false,
            type: 'category',
            labels: {
                step: 1,
                style: {
                    color: "#000000"
                }
            },
            tickLength: 0,
            title: {
                style: {
                    color: "#000000"
                }
            },
            tickColor: "#FFFFFF"
        },
        { // mirror axis on right side
            type: 'category',
            visible: false,
            opposite: true,
            reversed: false,
            linkedTo: 0
        }
        ],
        series: [
            {
                color: "#71A3B5", // rot
                //borderWidth: 0,
                //pointWidth: 15
            },
            {
                color: "#73B97C", //blau
                //borderWidth: 0,
                //pointWidth: 15
            },
            {
                color: "#000000", //schwarz
                //borderWidth: 0,
                //pointWidth: 15
            }
        ],
        "legend": {
            "enabled": true,
            "layout": "horizontal",
            "verticalAlign": "top",
            "align": "left",
            //"y": 55,    
            "itemStyle": {
                "fontWeight": "normal"
            }
        },
    };
}());