(function () {
    return {
        "chart": {
            marginLeft: 70,
            "inverted": true,
        },
        plotOptions: {
            column: {
                groupPadding: 0,
            }
        },
        "yAxis": {
            tickInterval: 25,
            labels: {
                y: 10
            }
        },
        "xAxis": {
            "type": "category",
            "labels": {
                align: "left",
                x: -60/*-110*/,
                y: 3,
                step: 1,
                "style": {
                    fontSize: '8px',
                }
            }
        },
        "legend": {
            "layout": "horizontal",
            "verticalAlign": "top",
            "align": "left",
            reversed: false,
            alignColumns: false,
            itemWidth: 110,
            itemStyle: {
                textOverflow: undefined,
                whiteSpace: 'nowrap',
            },
            itemMarginBottom: 3,
            labelFormatter: function () {
                return this.name.replace('/', '/<br/>');
            },
            margin: 7
        },
        "series": [
            { "color": "#923F8D", "index": 5, "legendIndex": 1 }, /*grün dunkel2*/
            { "color": "#B375AB", "index": 4, "legendIndex": 2 }, /*grün mittel*/
            { "color": "#FABD24", "index": 3, "legendIndex": 3 }, /*grün dunkel1*/
            { "color": "#008AC3", "index": 2, "legendIndex": 4 }, /*grün hell*/
            { "color": "#C8C8C8", "index": 1, "legendIndex": 5 },
            { "color": "#6F6F6F", "index": 0, "legendIndex": 6 },
        ],
    };
}());
