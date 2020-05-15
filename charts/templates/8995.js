Highcharts.dateFormats = {
    V: function (timestamp) {
        var target = new Date(timestamp);
        var dayNr = (target.getDay() + 6) % 7;
        target.setDate(target.getDate() - dayNr + 3);
        var firstThursday = target.valueOf();
        target.setMonth(0, 1);
        if (target.getDay() != 4) {
            target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
        }
        return 1 + Math.ceil((firstThursday - target) / 604800000); // 604800000 = 7 * 24 * 3600 * 1000  
    },
    G: function (timestamp) {
        var target = new Date(timestamp);
        target.setDate(target.getDate() - ((target.getDay() + 6) % 7) + 3);
        return target.getFullYear();
    }
};


(function () {
    return {
        chart: {
            events: {
                load: function () {
                    //move legend title
                    var title = this.legend.title;
                    title.translate(-155, 23);
                    //title.translate(-155, 37);
                }
            }
        },
        plotOptions: {
            arearange: {
                lineWidth: 0.5,
                fillOpacity: 0.2,
                zIndex: -1,
                /*legend: {
                    fillOpacity: 0.2
                },*/
                tooltip: {
                    crosshairs: true,
                    shared: true
                },
                marker: { states: { hover: { enabled: false } } }
            },
            line: {
                tooltip: {
                    crosshairs: true,
                    shared: true
                },
            }
        },

        tooltip: {
            // shared: true,

            xDateFormat: 'Woche vom %A, %d.%m.%Y (KW %V %G)',
            formatter: function (e) {
                //use shared tooltip for group of series only (instead of for all)
                //source: https://jsfiddle.net/BlackLabel/gq1d1aba/

                //console.log(this.point.series);

                var point = this.point,
                    series = point.series,
                    chart = series.chart,
                    correspondingSeries = series.linkedSeries[0] || series.linkedParent,
                    linePoint,
                    arearangePoint,
                    correspondingPoint,
                    firstLine = '';

                if (correspondingSeries === undefined) return e.defaultFormatter.call(this, e);
                else {
                    // unselect previously selected point
                    if (chart.extraHoveredPoint) {
                        chart.extraHoveredPoint.setState('');
                    }

                    // find corresponding point
                    if (correspondingSeries) {
                        //console.log(correspondingSeries,  correspondingSeries.points, point.index);
                        //console.log(point.index, this.series.cropStart);
                        correspondingPoint = correspondingSeries.points[point.index - this.series.cropStart];
                        correspondingPoint.setState('hover');
                        chart.extraHoveredPoint = correspondingPoint;
                    }

                    // identify type of points for formatting purposes
                    if (point.low !== undefined) {
                        arearangePoint = point;
                        linePoint = correspondingPoint;
                    } else {
                        arearangePoint = correspondingPoint;
                        linePoint = point;
                    }
                    //console.log(this);
                    if (linePoint.y !== null) firstLine = "<span style='color:" + linePoint.series.color + "'>●</span> " +
                        linePoint.series.name + ": <b>" + linePoint.y + "</b><br>";

                    return "<span style='font-size: 10px'>" + Highcharts.dateFormat('KW %V-%G (Woche vom %A, %d.%m.%Y)', this.x) + "</span><br>" +
                        firstLine +
                        arearangePoint.series.name.replace('Untere Grenze', '') + ": <b>" + arearangePoint.low + "</b> bis <b>" + arearangePoint.high + "</b> Todesfälle";
                }
            }

        },

        "series": [
            {
                id: "a",
                "color": "#71A3B5",
                zIndex: 10,
                legendIndex: 2
            },
            /*{
                id: "b",
                "color": "#71A3B5",
                //lineWidth: 0.5,
                dashStyle: 'ShortDot',
                zIndex: 5,
                legendIndex: 3
                //linkedTo:"eins",
            },*/
            {
                id: "c",
                "color": "#256370",
                type: 'arearange',
                linkedTo: "a",
                zIndex: 2,
            },
            {
                id: "d",
                "color": "#FF8028",
                zIndex: 9,
                legendIndex: 0,
                showInNavigator: true,
            },
            /*{
                id: "e",
                "color": "#FF8028",
                //lineWidth: 0.5,
                dashStyle: 'ShortDot',
                zIndex: 4,
                legendIndex: 1
                //linkedTo:"zwei",
            },*/
            {
                id: "f",
                "color": "#FFBB58",
                type: 'arearange',
                linkedTo: "d",
                zIndex: 1
            },


        ],
        "xAxis": {
            min: Date.now() - 30 * 7 * 24 * 3600 * 1000,//Date.parse('2019-01-01'),
            max: Date.now() + 5 * 7 * 24 * 3600 * 1000,//Date.parse('2020-07-01'),
            type: 'datetime',
            //startOnTick: true,
            //endOnTick: true,
            tickInterval: 7 * 24 * 3600 * 1000,
            labels: {
                // rotation: -45,
            },
            dateTimeLabelFormats: {
                day: '%V-%G',
                week: '%V-%G',
                month: '%V-%G',
                year: '%Y'
                /*
                day: '%d.%m.%y',
                week: '%d.%m.%y',
                month: '%d.%m.%y',
                year: '%Y'
                */
            },
        },
        /*
                yAxis: {
                            tickInterval: 10,
                            max: 70
                },
        */
        navigator: {
            enabled: true
        },
        legend: {
            enabled: true,
            layout: "horizontal",
            verticalAlign: "top",
            align: "right",
            x: -38,
            y: -35,
            alignColumns: true,
            width: 240,
            itemWidth: 110,
            itemStyle: {
                textOverflow: undefined,
                whiteSpace: 'nowrap',
            },
            labelFormatter: function () {
                return this.name
                    //.replace('65+ Jahre', '')
                    //.replace('0 - 64 Jahre', '')
                    .replace('Gemeldete Todesfälle ', '');
                //.replace('Hochgerechnete Todesfälle', 'hochgerechnete');
            },

            title: {
                text: 'Gemeldete Todesfälle: ',
                style: {
                    fontWeight: 'normal'
                }
            },

            /*
            x: -38,
            y: -35,
            alignColumns: true,
            width: 240,
            itemWidth: 110,
            itemStyle: {
                textOverflow: undefined,
                whiteSpace: 'nowrap',
            },
            labelFormatter: function () {
                return this.name
                    .replace('65+ Jahre', '')
                    .replace('0 - 64 Jahre', '')
                    .replace('Gemeldete Todesfälle', 'gemeldete')
                    .replace('Hochgerechnete Todesfälle', 'hochgerechnete');
            },
            title: {
                text: 'Todesfälle 65+ Jahre:<br/>Todesfälle 0 bis 64 Jahre:',
                style: {
                    fontWeight: 'normal'
                }
            },
    */
        }
    }
}());

