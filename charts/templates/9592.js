(function () {
    return {
        chart: {
            type: "column",
            animation: false,
            inverted: false,
        },
        plotOptions: {
            series: {
                pointPadding: 0.1,
                borderWidth: 0,
                groupPadding: 0.1,
                // pointWidth: 14
            }
        },
        data: {
            switchRowsAndColumns: true,
        },

        yAxis: {
            tickAmount: 6,
            labels: {
                format: "{value:,.0f}"
            }
        },
        xAxis: {
            tickInterval: 1,

        },
        series: [

            { color: "#008AC3" },
            { color: "#A0BEC8", visible: false },
            { color: "#68AB2B " },
            { color: "#73B97C", visible: false },
            { color: "#923F8D" },
            { color: "#B375AB", visible: false },
            { color: "#FABD24" },
            { color: "#FFDA80", visible: false },
            { color: "#DC440E" },
            { color: "#FF8028", visible: false },
            { color: "#9E7C59" },
            { color: "#C4AB91", visible: false },

        ],
        legend: {
            enabled: true,
            layout: "horizontal",
            verticalAlign: "top",
            align: "left",
            itemWidth: 210,
            width: 450,
            itemDistance: 0,
            itemStyle: {
                fontWeight: "normal"
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
        }
    }
}());
