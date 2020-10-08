(function () {
    return {
        "xAxis": {
            "type": "category",
            reversed: false, 
            "labels": {
                formatter: undefined
            }
        },
        "yAxis": {
            "tickInterval": null,
            "reversedStacks": false,
            max: 100
        },
        "series": [
            {
                "color": "#007a2f"
            },
            {
                "color": "#44ab2b"
            },
            {
                "color": "#73ba7c"
            },
            {
                "color": "#d7e9d2"
            },
            {
                "color": "#b9cfd7"
            },
            {
                "color": "#71a3b5"
            },
            {
                "color": "#ffbb58"
            }, {
                "color": "#ff8028"
            }, {
                "color": "#dc440e"
            }, {
                "color": "#b00000"
            }
        ],
        "legend": {
            "layout": "horizontal",
            "verticalAlign": "top",
            "itemMarginBottom": 4,
            "align": "left",
            //"x": 145,
            //"y": 70,
            "itemWidth": 150,
            "itemStyle": {
                "fontWeight": "normal"
            }
        },
        "chart":
        {
            height: 700,
            "inverted": true
        }
    }
}());
