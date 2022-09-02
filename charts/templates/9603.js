(function () {
    return {
        "xAxis": {
            tickInterval: 1,
            type: "category",
            labels: {
                formatter: function () {
                    if (this.value.length == 4) {
                        return this.value
                    }
                    else {
                        return this.value
                            .replace("/20", "/")
                            .replace("20", "");
                    }
                }
            },
        },
        "yAxis": {
            tickAmount: 9,
            "labels": {
                "format": "{value:,.0f}"
            }
        },
        "tooltip": {
            useHTML: true,
            headerFormat: '',
            pointFormatter: function () {
                if (this.name.length == 4) {
                   return '<span style="font-size: 10px">' + this.name + '</span><br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + 'Gesamtumschlag: <b>' + Highcharts.numberFormat((this.y), 0) + '</b><br/><b>';
                }
                else if (this.y < 0) {
                    return '<span style="font-size: 10px">\u0394 ' + this.name + '</span><br/><span style="color: #B00000">\u25CF</span> ' + 'Veränderung gegenüber Vorjahr: <b>' + Highcharts.numberFormat((this.y), 0) + '</b><br/><b>';
                }
                else {
                    return '<span style="font-size: 10px">\u0394 ' + this.name + '</span><br/><span style="color:' + this.color + '">\u25CF</span> ' + 'Veränderung gegenüber Vorjahr: <b>' + Highcharts.numberFormat((this.y), 0) + '</b><br/><b>';
                }
            }
        },
        series: [{
            upColor: '#68AB2B',
            color: '#B00000',
        }],
        "data": {
            "seriesMapping": [
                {
                    x: 0, y: 1, isSum: 2, color: 3
                }
            ],
            parsed: function (columns) {
                //define isSum by entry in first column
                var isSum = columns[0].map(function (val, i, arr) {
                    //column name
                    if (i == 0) {
                        val = 'isSum';
                    }
                    //column value
                    else {
                        switch (val) {
                            case columns[0].slice(-1)[0]: val = true; break;
                            default: val = null;
                        }
                    }
                    return val;
                });
                //define color by entry in first column
                var color = columns[0].map(function (val, i, arr) {
                    //column name
                    if (i == 0) {
                        val = 'color';
                    }
                    //column value
                    else {
                        switch (val) {
                            case columns[0].slice(-1)[0]: val = '#FABD24'; break;
                            case columns[0].slice(1)[0]: val = '#FABD24'; break;
                            default: val = null;
                        }
                    }
                    return val;
                });
                columns.push(isSum);
                columns.push(color);
            }
        },
        "legend": {
            "enabled": false,
            "layout": "horizontal",
            "verticalAlign": "top",
            "itemMarginBottom": 5,
            "align": "left",
            "itemStyle": {
                "fontWeight": "normal"
            }
        },
        "plotOptions": {
            waterfall: {
                pointPadding: 0
            }
        },
        chart: {
            type: 'waterfall'
        },
    }
}());