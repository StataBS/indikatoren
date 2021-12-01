(function () {
    return {
        xAxis: {
            type: "category"
        },
        yAxis: {
            reversedStacks: false,
        },
        legend: {
            //reversed: false,
            layout: "horizontal",
            verticalAlign: "top",
            align: "left",
            //width: 450,
            itemWidth: 180,
            itemMarginBottom: 4,
            labelFormatter: function () {
                return this.name.replace("/", " /<br/>");
            }
        },
        series: [
            { color: "#007A2F" }, // dunkelgrün
            { color: "#68AB2B" }, // grün
            { color: "#FFBB58" }, // gelb
            { color: "#B00000" }, // rot
            //{ "color": "#C8C8C8"}, // hellgrau
            //{ "color": "#6F6F6F"}, // grau
        ]
    };
}());
