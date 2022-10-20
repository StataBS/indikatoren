(function () {
    return {
        "chart": {
            marginRight: 20
        },
        "xAxis": {
            "tickInterval": 1,
        },
        "yAxis": {
            "labels": {
                "format": "{value:,.0f}",
                "formatter": function () {
                    return Highcharts.numberFormat((this.value), 0) + '%';
                },
            }
        },
        "tooltip": {
            "pointFormatter": function () {
                return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '% </b>'
            },
        },
        "series": [
            { "color": "#008AC3" },
        ],
        "legend": {
            "enabled": false,
            //"x": 45,
            //"y": 55,
            "layout": "horizontal",
            "verticalAlign": "top",
            "itemMarginBottom": 5,
            "align": "left",
            "itemStyle": {
                "fontWeight": "normal"
            }
        },
        "plotOptions": {
            "line": {
                "marker": {
                    "enabled": false,
                    "symbol": "circle",
                }
            },
            series: {
                connectNulls: true
            },
        }
    }
}());