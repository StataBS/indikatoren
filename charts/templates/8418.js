(function () {
    return {
        "chart": {
            "type": "column",
        },
        "plotOptions": {
            "series": {
                borderWidth: 0,
            },
        },
        "xAxis": {
            "type": "category",
            "tickInterval": 1
        },
        "yAxis": {
            "labels": {
                "formatter": function () {
                    return Highcharts.numberFormat((this.value), 0);
                },
            }
        },
        "series": [
            {
                "color": "#FABD24"
            },
            {
                "color": "#923F8D"
            }
        ],
        "legend": {
            "enabled": true,
            "layout": "horizontal",
            "verticalAlign": "top",
            "align": "left",
            //"y": 35,    
            "itemStyle": {
                "fontWeight": "normal"
            }
        },
        "tooltip": {
            "pointFormatter": function () {
                return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 0) + '</b> m<sup>2</sup>'
            },
            useHTML: true,
            "shared": false
        }
    }
}());
