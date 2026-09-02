(function () {
    return {
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
        },
        legend: {
            reversed: false,
            "layout": "horizontal",
            "verticalAlign": "top",
            "itemMarginBottom": 4,
            "align": "left",
            itemWidth: 150,
            width: 450,
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

