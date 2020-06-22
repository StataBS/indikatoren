(function () {
    return {
        "plotOptions": {
            "series": {
                "stacking": null,
                pointPadding: 0,
                groupPadding: 0.1,
                borderWidth: 0
            }
        },
        "chart": {
            "type": "column"
        },
        "series": [
            { "color": "#008AC3" },
            { "color": "#DC440E" },
            { visible: false, showInLegend: false, "color": "#B00000" },
            { visible: false, showInLegend: false, "color": "#246370" },
            { "color": "#474747" }
        ],
        "xAxis": {
            "type": "category"
        },
        "yAxis": {
            "max": 100,
            tickInterval: 25,
            "labels": {
                "format": "{value}%"
            }
        },
        "legend": {
            enabled: true,
            "layout": "horizontal",
            "verticalAlign": "top",
            "align": "left",
            "itemMarginBottom": 5,
            padding: 0,
        },
        tooltip: {
            "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>'
        }
    }
}());


