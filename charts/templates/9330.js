/*
    global Highcharts
*/

(function () {
    return {
        series: [
            {
                color: "#FABD24",
            },
            {
                color: "#DC440E",
            },
            {
                color: "#B375AB",
                type: 'scatter',
                marker: {
                    symbol: 'circle',
                    radius: 3
                },
                //pointPlacement : -0.15
            },
            {
                color: "#662673",
                type: 'scatter',
                marker: {
                    symbol: 'circle',
                    radius: 3
                },
                stacking: false,
                //pointPlacement : 0.15
            }
        ],
        xAxis: {
            type: "category",
            labels: {
                step: 1,
                rotation: -45,
            }

        },
        yAxis: [
            {
                tickAmount: 5,
                gridLineColor: '#B9CFD7',
                gridLineWidth: 0.5,
                lineColor: '#B9CFD7',
                title: {
                    style: {
                        color: "#000000",
                        fontSize: null
                    },
                    text: null
                },
                labels: {
                    format: "{value:,.0f}",
                    style: {
                        color: "#000000"
                    }
                }
            },
            {
                opposite: true,
                min: 0,
                tickAmount: 5,
                gridLineColor: '#B9CFD7',
                gridLineWidth: 0.5,
                lineColor: '#B9CFD7',
                title: {
                    style: {
                        color: "#000000",
                        fontSize: null
                    },
                    text: null
                },
                labels: {
                    format: "{value:,.0f}",
                    style: {
                        color: "#000000"
                    },

                }
            }
        ],
        plotOptions: {
            series: {
                stacking: null,
                pointPadding: 0,
                borderWidth: 0,
                //pointWidth: 10, 

            },
            scatter: {
                yAxis: 1,
                tooltip: {
                    headerFormat: '<span style="font-size: 10px"> {point.key}</span><br/>',
                    pointFormatter: function () {
                        return '<span style="color:' + this.color + '">●</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat(this.y, 0, ",", " ") + '</b><br/>';
                    }
                }
            }
        },
        legend: {
            "enabled": true,
            "layout": "horizontal",
            "verticalAlign": "top",
            "align": "left",
            "itemStyle": {
                "fontWeight": "normal"
            },
        },
        data: {
            switchRowsAndColumns: true
        },
        tooltip: {
            "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
            "shared": false
        },
        "chart": {
            type: "column",
            width: 662,
            height: 208,
        }
    };
}());

