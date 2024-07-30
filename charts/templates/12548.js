
(function () {
    return {
        "chart": {
            marginLeft: 180,
            inverted: true,
            width: 665,
            //height: 200,
        },
        "xAxis": {
            type: "category",
            labels: {
                rotation: 0,
                align: "left",
                x: -170,
                useHTML: true,
                style: {
                    color: "#000000",
                    //whiteSpace: 'nowrap',
                   // textOverflow: "none"
                },
                formatter: function () {
                    return this.value
                        .replace(" (z. B. Kleider, Elektronik)", "")
                        .replace(", Essen", "");
                }
            }
        },
        "yAxis": {
            tickInterval: 25,
            reversedStacks: false,
        },
        legend: {
            reversed: false,
            "layout": "horizontal",
            "verticalAlign": "top",
            "align": "left",
            "itemMarginBottom": 0,
            //itemDistance: 0,
        },
        tooltip: {
            pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> ({point.percentage:,.1f}%)<br/>',
            useHTML: true,
            outside: true
        },
        "series": [
            { "color": "#246370" }, // dunkelgrün
            { "color": "#FFBB58" }, // grün
            // { "color": "#C8C8C8"}, // grau
            { "color": "#6F6F6F" }, // grau
        ],
    }
}());
