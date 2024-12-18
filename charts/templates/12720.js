/*
    global Highcharts
*/

(function () {
    return {
        data: {
            "seriesMapping": [
                {
                  x: 0, y: 7 // Lysbüchel
                },
                {
                  x: 0, y: 8
                }   
              ],
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
                negateNumbersInColumn(7);
                //negateNumbersInColumn(2);  //welche datenreihen sollen links (negativ) erscheinen?
            }
        },
        yAxis: [{
            max: 2000,
            //tickInterval: 6000,
            min: 0,
            title: {
                text: null
            },
            "labels": {
                step: 1,
                formatter: function () {
                    return Highcharts.numberFormat(Math.abs(this.value), 0, ",", " ");
                },
                "style": {
                    "color": "#000000"
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
            }
        },
        { // mirror axis on right side
            type: 'category',
            visible: false,
            opposite: true,
            reversed: false,
            linkedTo: 0
        }],
        series: [
            {
                //color: "#246370", // blau dunkel
                color: "#008ac3",
                stacking: 'normal',
                //stack: 'Männer',
                legendIndex: 0
            },
            {
                //color: "#923F8D", // rot dunkel 
                "color": "#b00000",
                stacking: 'normal',
                //stack: 'Frauen',
                legendIndex: 1
            },
        ],
        "legend": {
            "enabled": true,
            "layout": "horizontal",
            "verticalAlign": "top",
            "align": "left",
            //"y": 55,
            //"x": 2000,
            "itemWidth": 145,
            "itemStyle": {
                "fontWeight": "normal"
            }
        },
        "tooltip": {
            "shared": true,
            formatter: function () { //sum values correctly
                var s = '<span style="font-size: 12px">Alter: <b>' + this.points[0].key + '</b></span><br/>';
                var sum = 0;
                $.each(this.points, function (i, point) {
                    var v = Math.sqrt(this.y * this.y); //make - to + again
                    s += '<span style="color:' + point.series.color + '">\u25CF</span> ' + point.series.name + ': <b>' + v + '</b><br/>';
                    sum += v;
                });
                // s += 'Total: <b>'+ sum + '</b>';
                return s;
            },

        },
        "chart": {
            marginRight: 15,
            marginBottom: 70,
            events: { // copied from resp. overwrite /charts/templates/populationPyramid001.js
                load: function () {
                    this.credits.element.onclick = function () { };

                    //for top-left legends with no x defined: move legend to x position of first yAxis
                    if (this['legend']['options']['align'] == 'left' && this['legend']['options']['verticalAlign'] == 'top') {
                        this.update(
                            {
                                legend: {
                                    x: this.yAxis[0].left - this.spacingBox.x - this.legend.padding + 80 //fixed offset instead of /charts/templates/populationPyramid001.js
                                }
                            }
                        );
                    };

            // Friedmatt anstelle Friedmattviertel
          this.series[0].update({
            name: "Männer"
        });
        this.series[1].update({
            name: "Frauen"
        });
                },
            }
        }
    };
}());