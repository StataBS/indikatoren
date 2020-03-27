(function () {
    return {
        "plotOptions": {
            "series": {
                borderWidth: 0,
                //"pointWidth": 25,
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
            tickAmount: 7,
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
            width: 100,
            "itemStyle": {
                fontSize: "9px",
                textOverflow: "undefined",
                "fontWeight": "normal"
            }
        },
        "series": [
            {
                "color": "#83038",
                "legendIndex": 3
            },
            {
                "color": "#246370",
                "legendIndex": 2
            },
            {
                "color": "#689199",
                "legendIndex": 1
            },
            {
                "color": "#D3E2E4",
                "legendIndex": 0
            }
        ],
        "chart": {
            "type": "column",
            marginTop: 7
        }
    }
}());
