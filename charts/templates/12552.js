(function () {
    return {
        chart: {
            //height: 550,
        },
        series: [
            { "color": "#246370" }, // dunkelblau
            { "color": "#689199" }, // blau
            { "color": "#FABD24" }, // orange
            { "color": "#FF8028" }, // rot
            { "color": "#C8C8C8" }, // hellgrau
            { "color": "#6F6F6F" }, // grau
        ],
        xAxis: {
            type: "category",
             labels: {
                formatter: function () {
                    return this.value.replace("*", "<b>").replace("Haushalte", "HH"); //used for indentation in web-charts
                }
             }
        },
        yAxis: {
            reversedStacks: false,
        },
        legend: {
            reversed: false,
        }
    };
}());