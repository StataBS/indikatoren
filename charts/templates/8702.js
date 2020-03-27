(function () {
    return {
        "yAxis": [{
            gridLineColor: '#B9CFD7',
            gridLineWidth: 0.5,
            lineColor: '#B9CFD7',
            "title": {
                "style": {
                    "color": "#000000",
                    "fontSize": null
                },
                "text": null
            },
            "labels": {
                "format": "{value:,.0f}",
                "style": {
                    "color": "#000000",
                    fontSize: "10px"
                }
            },
            "min": 0,
            "max": undefined,
            tickAmount: 5
        }
        ],
        "xAxis": {
            "tickInterval": 12,
            "type": "category",
            labels: {
                x: 12.5,
                rotation: 0,
                "formatter": function () {
                    return this.value.split("-").slice(0, -1);
                },
            }
        },
        "series": [
            {
                "color": "#FF8028", "index": 1,
                "tooltip": {
                    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
                },
            }
        ],

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