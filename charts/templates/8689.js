(function () {
    return {
        "yAxis":
        {
            
                },
        "xAxis": {
            "tickInterval": 12,
            "type": "category",
            labels: {
                x: 20,
                "formatter": function () {
                    return this.value.split("-").slice(0, -1);
                },
            }
        },
        "series":[{
            "color": "#FF8028", visible: true,
            "tooltip": {
                "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
            },
        }],

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
    }
}());

