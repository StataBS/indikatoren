(function () {
    return {
        "chart": {
            "type": "column",
        },
        "subtitle": {
            useHTML: true
        },
        "plotOptions": {
            "series": {
                //pointPadding: 0,
                //groupPadding: 0.1,
                borderWidth: 0,
                "dataLabels": {
                    "style": {
                        "fontSize": "10px"
                    }
                }
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
                return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 0) + '</b>'
            },
            useHTML: true,
            "shared": false
        },
    }
}());
