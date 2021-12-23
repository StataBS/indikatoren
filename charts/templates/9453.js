(function () {
    return {
        plotOptions: {
            series: {
                //pointPadding: 0,
                borderWidth: 0,
                //groupPadding: 0.1,
            }
        },
        tooltip: {
            shared: true
        },
        "series": [
            {
                "index": 0,
                color: "#008AC3",
                "tooltip": {
                    "pointFormatter": function () {
                        return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y*100), 0) + '%</b>';
                    }
                }
            },
            {
                "index": 1,
                color: "#dc440e",
                "tooltip": {
                    "pointFormatter": function () {
                        return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y*100), 0) + '%</b>';
                    }
                }

            },
            {
                "index": 2,
                color: "#3c3c3c",
                "tooltip": {
                    "pointFormatter": function () {
                        return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y*100), 0) + '%</b>';
                    }
                }
            },
        ],
        "xAxis": {
            "type": "category",
            labels: {
            rotation: 0
            }
        },
        "yAxis": {
            tickAmount: 5,
            "labels": {
                "formatter": function () {
                    return Highcharts.numberFormat((this.value*100), 0) + '%';
                },
            }
        },
        "legend": {
            //itemDistance: 5,
            "enabled": true,
            "layout": "horizontal",
            "verticalAlign": "top",
            "align": "left",
            "itemStyle": {
                "fontWeight": "normal"
            }
        },
        "chart": {
            "type": "column",
            "inverted": false
        }
    }
}());