(function () {
    return {
        "chart": {
            "type": "column",
            spacingBottom: 45,
        },
        "xAxis": {
            "tickInterval": 1,
        },
        "yAxis": {
            tickInterval: 500,
            "labels": {
                "format": "{value:,.0f}"
            },
        },
        "tooltip": {
            "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
            "shared": false
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
    }
}());

