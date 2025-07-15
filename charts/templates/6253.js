(function () {
    return {
        chart: {
            inverted: false,
            marginTop: 10
        },
        yAxis: {
            tickInterval: 25,
        },
        xAxis: {
            type: "category",
            labels: {
                formatter: function () {
                    return this.value;
                },
                rotation: -45
            }
        },
        "series": [
            { "color": "#672773", "index": 14, legendIndex: 0 }, /*dunkelpink */
            { "color": "#E7CEE2", "index": 13, legendIndex: 1 }, /*hellpink */
            { "color": "#007A2F", "index": 12, legendIndex: 2 }, /*dunkelgrün */
            { "color": "#73BA7C", "index": 11, legendIndex: 3 }, /*hellgrün */
            { "color": "#FFBB58", "index": 10, legendIndex: 4 }, /*dunkelgelb */
            { "color": "#FF8028", "index": 9, legendIndex: 5 }, /*dunkelgelb */
        ],
        "legend": {
            "layout": "vertical",
            reversed: true,
            "verticalAlign": "middle",
            "align": "right",
        },
        "data": {
            "switchRowsAndColumns": true
        },
    };
}());