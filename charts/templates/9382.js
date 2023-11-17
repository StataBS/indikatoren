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
            reversedStacks: false,
            "labels": {
                "format": "{value:,.0f}"
            },
        },
        "xAxis": {
            tickInterval: 1,
            "type": "category",
        },
        "tooltip": {
            "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.percentage:.1f}%)<br/>',
            "footerFormat": 'Total: <b>{point.total:,.0f}</b>'
        },
        "legend": {
            "layout": "vertical",
            "align": "right",
            "verticalAlign": "middle",
            "itemMarginBottom": 5,
            reversed: true,
            labelFormatter: function () {
                return this.name.replace('Genossenschafts', 'Genossenschafts-<br>').replace('Selbstbewohnte', 'Selbstbewohnte<br>');
            }
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
