(function () {
    return {
        chart: {
            inverted: true
        },
        series: [
            { "color": "#246370" }, // dunkelgrün
            { "color": "#A8C3CA" }, // grün
            { "color": "#FFBB58" }, // orange
            { "color": "#DC440E" }, // orange
            { "color": "#D3E2E4" }, // orange
            { "color": "#C8C8C8" }, // grau
            { "color": "#6F6F6F" }, // grau
        ],
        xAxis: {
            type: "category"
        },
        yAxis: {
            reversedStacks: false,
            tickInterval: 25
        },
        legend: {
            reversed: false,
            "layout": "horizontal",
            "verticalAlign": "top",
            "itemMarginBottom": 0,
            "align": "left",
            itemWidth: 125,
            width: 250,
            itemStyle: {
                textOverflow: "none",
                whiteSpace: "nowrap"
            },
            labelFormatter: function () {
                return this.name.replace("/", " /<br/>");
            }
        }
    };
}());

