(function () {
    return {
        chart: {
            marginRight: 70,
        },
        xAxis: {
            labels: {
                rotation: 0,
            },
            type: "category",
            tickPositioner: function () {
                var maxlabels = 12,
                    ext = this.getExtremes(),
                    i = Math.round(ext.max),
                    interval = Math.round((i - ext.min) / maxlabels),
                    pos = [i];
                while (i >= ext.min) pos.unshift(i = i - interval);
                return pos;

            }
        },
        "yAxis": [{
            tickAmount: 8,
            alignTicks: true,
            title: {
                text: null,
                "color": "#000000",
                "fontSize": null
            },
            "labels": {
                "format": "{value:,.0f}",
                style: {
                    color: "black",
                },
            },

        },
        {
            tickAmount: 8,
            alignTicks: true,
            "title": {
                "style": {
                    "color": "#000000",
                    "fontSize": null
                },
                "text": null
            },
            "labels": {
                "format": "{value:,.0f}",
                style: {
                    color: "black",
                },
            },
            "opposite": true
        }
        ],
        "tooltip": {
            "shared": false,
            "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
        },
        "series": [
            {
                "color": "#67A9CF",
                type: "column",
                zIndex: 0
            },
            {
                "color": "#053061",
                "yAxis": 1,
                zIndex: 1
            },
        ],
        "legend": {
            "enabled": true,
            "layout": "horizontal",
            "verticalAlign": "top",
            "itemMarginBottom": 5,
            "align": "left",
            "itemStyle": {
                "fontWeight": "normal"
            }
        },
        "plotOptions": {
            "line": {
                "connectNulls": true,
                "marker": {
                    "enabled": false,
                    "symbol": "circle",
                }
            },
            column: {
                //pointPadding: 0.2,
                //groupPadding: 0.1,
            }
        },

    }
}());
