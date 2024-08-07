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
        yAxis: [{
            max: 25,
            tickInterval: 5,
            min: 0,
            title: {
                text: null
            },
            labels: {
                rotation: 0,
                formatter: function () {
                    return Highcharts.numberFormat(Math.abs(this.value), 0, ",", " ") + "%";
                },
                style: {
                    color: "#000000",
                    textOverflow: 'none',
                    fontSize: '10px'
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
                "style": {
                    "color": "#000000",
                    textOverflow: 'none',
                    fontSize: '10px'

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
                color: "#661200", // Männer
                //borderWidth: 0,
                //pointWidth: 15
            },
            {
                color: "#dc440e", //Frauen
                //borderWidth: 0,
                //pointWidth: 15
            },
            /*{
             color: "#000000", //schwarz
             //borderWidth: 0,
             //pointWidth: 15
           }*/
        ],
        "legend": {
            "enabled": true,
            x: 7,
            "layout": "horizontal",
            "verticalAlign": "top",
            "align": "center",
            "itemStyle": {
                "fontWeight": "normal"
            }
        },
        plotOptions: {
            series: {
                borderWidth: 0.2,
            }
        },
        tooltip: {
            pointFormatter: function () {
                return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat(Math.abs(this.y), 1, ",", " ") + '%</b><br/>';
            }
        },
    };
}());