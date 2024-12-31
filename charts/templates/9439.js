(function () {
    return {
        "chart": {
            "type": "column"
        },
        "plotOptions": {
            "series": {
                "stacking": "normal"
            }
        },
        "yAxis": {
            tickAmount: 5,
            reversedStacks: false,
            "labels": {
                "format": "{value:,.0f}"
            },
        },
        "xAxis": {
            tickInterval: 1,
            "type": "category",
            "labels": {
                rotation: -45,
            },
        },
        "tooltip": {
            "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.percentage:.1f}%)<br/>',
            "footerFormat": 'Total: <b>{point.total:,.0f}</b>'
        },
        "legend": {
            "layout": "horizontal",
            "verticalAlign": "top",
            "align": "left",
            reversed: true,
        },
        "series": [
            {
                "color": "#ffbb58",
            },
            {
                "color": "#008AC3",
            },
            {
                "color": "#73B97C",
            },
            {
                "color": "#662673",
            }
        ]
    };
}());
