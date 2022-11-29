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
            parsed: function (columns) {
                //create two columns without data, only with the names of their linked column so that the legend item title is correct
                columns.splice(1, 0, [columns[1][0]]);
                columns.splice(3, 0, [columns[3][0]]);
            }
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
            {
                //used only to have a legend item with a defined color despite colorByPoint is true
                id: 'dummy0',
                color: "#0F7399",
                grouping: false,
            },
            {
                linkedTo: 'dummy0',
                colors: ["rgba(15,115,153,0.5)", "rgba(15,115,153,0.5)", "rgba(15,115,153,0.5)", "rgba(15,115,153,0.5)", "rgba(15,115,153,0.5)", "rgba(15,115,153,0.5)", "rgba(15,115,153,0.5)", "rgba(15,115,153,0.5)", "#0F7399", "#0F7399", "#0F7399"],
                colorByPoint: true,
            }, {
                //used only to have a legend item with a defined color despite colorByPoint is true
                id: 'dummy1',
                color: "#008AC3",
                grouping: false,
                visible: false
            },
            {
                linkedTo: 'dummy1',
                colors: ["rgba(0,138,195,0.5)", "rgba(0,138,195,0.5)", "rgba(0,138,195,0.5)", "rgba(0,138,195,0.5)3", "rgba(0,138,195,0.5)", "rgba(0,138,195,0.5)", "rgba(0,138,195,0.5)", "rgba(0,138,195,0.5)", "#008AC3", "#008AC3", "#008AC3"],
                colorByPoint: true,
                visible: false
            },
            { color: "#DC440E" },
            { color: "#FF8028", visible: false },
            { color: "#007A2F" },
            { color: "#68AB2B", visible: false },

        ],
        legend: {
            enabled: true,
            layout: "horizontal",
            verticalAlign: "top",
            align: "left",
            itemWidth: 210,
            width: 450,
            itemDistance: 0,
        },
        tooltip: {
            pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
        }
    }
}());
