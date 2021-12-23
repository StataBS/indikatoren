(function () {
    return {
        "xAxis": {
            "tickInterval": 1,
        },
        "yAxis": {
            min: 0,
            max: 1,
            "labels": {
                "format": "{value:,.0f}",
                "formatter": function () {
                    return Highcharts.numberFormat((this.value * 100), 0) + '%';
                },
            }

        },
        tooltip: {
            "pointFormatter": function () {
                return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y * 100), 1) + '% </b><br/><b>'
            },

        },
        "series": [
            { "color": "#DC440E", index: 1 },
            { "color": "#661200 ", index: 2 },

        ],
        "legend": {
            "enabled": true,
            //"x": 45,
            //"y": 35,
            "layout": "horizontal",
            "verticalAlign": "top",
            "itemMarginBottom": 5,
            "align": "left",
            "itemStyle": {
                "fontWeight": "normal"
            }
        },
        "plotOptions": {
            column: {
                borderWidth: 0,
            }
        },
        "chart": {
            "type": "column"
        }
    }
}());

