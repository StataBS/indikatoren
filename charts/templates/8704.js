(function () {
    return {
        "plotOptions": {
            "series": {
                //"pointWidth": 25,
                borderWidth: 0,
                "dataLabels": {
                    "style": {
                        "fontSize": "10px"
                    }
                },
                "stacking": "normal"
            }
        },
        "xAxis": {
            "type": "category",
            "labels": {
                rotation: -45
            }
        },
        "yAxis": {
            tickAmount: 8,
            "labels": {
                "format": "{value:,.0f}"
            },
            "reversedStacks": false
        },
        "legend": {
            enabled: true,
            "layout": "vertical",
            "verticalAlign": "middle",
            "itemMarginBottom": 5,
            "align": "right",
            symbolPadding: 0,
            margin: 1,
            width: 120,
            labelFormatter: function () {
                return this.name.replace("Postdienste von Universaldienstleistungsanbietern", "Postdienste von Universaldienstleistungs-<br/>anbietern");
            },
            "itemStyle": {
                fontSize: "9px",
                textOverflow: "undefined",
                "fontWeight": "normal"
            }
        },
        "series": [
            {
                "color": "#DC440E",
                "legendIndex": 7
            },
            {
                "color": "#FF8028",
                "legendIndex": 6
            },
            {
                "color": "#2E1435",
                "legendIndex": 5
            },
            {
                "color": "#662673",
                "legendIndex": 4
            },
            {
                "color": "#923F8D",
                "legendIndex": 3
            },
            {
                "color": "#B375AB",
                "legendIndex": 2
            },
            {
                "color": "#E7CEE2",
                "legendIndex": 1
            },
            {
                "color": "#C9D6DB",
                "legendIndex": 0
            }
        ],
        "chart": {
            "type": "column"
        }
    }
}());
