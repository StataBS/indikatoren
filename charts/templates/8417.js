(function () {
    return {
        chart: {
            type: 'area',
            spacing: [6, 0, 3, 2],
        },
        xAxis: {
            showFirstLabel: true,
            showLastLabel: true,
            tickInterval: 5 * 12 * 30 * 24 * 3600 * 1000,
            min: Date.UTC(1967, 12, 30),
            labels: {
                rotation: -45,
                style: {
                    fontSize: '10px',
                },
            }
        },
        yAxis: {
            max: 250000,
            tickInterval: 50000,
            showLastLabel: true,
            endOnTick: true,
            labels: {
                format: '{value:,.0f}',
                style: {
                    fontSize: '10px',
                },
            },
        },
        legend: {
            enabled: false
        },
        navigator: {
            enabled: false
        },
        scrollbar: {
            enabled: false
        },
        rangeSelector: {
            enabled: false,
        }
    };
}());

