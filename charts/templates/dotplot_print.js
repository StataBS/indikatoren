(function () {
    return {
        chart: {
            type: "scatter",
            inverted: true,
            borderColor: "#fbfbfb",
            backgroundColor: "#fbfbfb",
            width: 320,
            height: 208,
            spacing: [2, 2, 2, 2], /*top, right, bottom and left */
            zoomType: "xy",
            style: {
                fontFamily: "Arial"
            },
            events: {
                load: function () {
                    this.credits.element.onclick = function () { }
                }
            }
        },
        plotOptions: {
            series: {
                borderWidth: 0
            }
        },
        title: {
            text: null,
            style: {
                fontSize: "14px",
                fontWeight: "bold",
                fontFamily: "Arial",
                color: "#000000"
            }
        },
        subtitle: {
            text: null,
            style: {
                fontSize: "12px",
                fontWeight: "normal",
                fontFamily: "Arial",
                color: "#000000"
            },
        },
        xAxis: {
            type: "category",
            lineColor: '#B9CFD7',
            lineWidth: 0.5,
            tickLength: 0,
            tickInterval: 1,
            uniqueNames: true,
            title: {
                text: null,
                "style": {
                    "color": "#000000"
                }
            },
            "labels": {
                "style": {
                    "color": "#000000",
                    "fontSize": "10px"
                }
            },
        },
        yAxis: {
            min: 0,
            gridLineColor: '#B9CFD7',
            gridLineWidth: 0.5,
            lineColor: '#B9CFD7',
            "title": {
                text: null,
                style: {
                    "color": "#000000",
                    "fontSize": "10px"
                },
            },
            labels: {
                y: 12,
                "style": {
                    "color": "#000000",
                    "fontSize": "10px"
                },
                formatter: function () {
                    return Highcharts.numberFormat((this.value * 100), 0) + '%';
                },
            },
        },
        legend: {
            enabled: false,
            symbolRadius: 0,
            padding: 0,
            itemMarginBottom: 2,
        },
        "credits": {
            "enabled": true,
            "style": {
                "color": "#000000",
                "fontSize": "10px",
                "cursor": "default"
            },
            "position": {
                "align": "left",
                "verticalAlign": "bottom",
                "x": 10
            }
        }
    };
}());
