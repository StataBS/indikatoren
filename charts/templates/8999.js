/* plotBands for weekends and 17.3.2020 when Corona-lockdown started in Switzerland */
var startDates = [Date.UTC(2019, 11, 27, 12, 0)];
var endDates = [Date.UTC(2019, 11, 29, 12, 0)];
var plotBands = [
    {
        color: '#ff0000',
        from: Date.UTC(2020, 2, 17, 0, 0), //corona-lockdown start
        to: Date.UTC(2020, 2, 17, 0, 0),
        label: {
            text: '17. März 2020',
            style: {
                color: 'red',
                fontSize: '7pt',
            },
            textAlign: 'left',
            x: 5,
            y: 10
        }
    }
];
//creating weekend-plotbands
var i = 0;
while (i < 52) {
    plotBands.push({
        color: '#eeeeee',
        from: parseFloat(startDates) + i * 7 * 24 * 3600 * 1000,
        to: parseFloat(endDates) + i * 7 * 24 * 3600 * 1000
    });
    i++;
}


(function () {
    return {
        chart: {
            //height: 450
        },
        plotOptions: {
            line: {
                lineWidth: 1.5,
            }
        },
        /*
        a2 #00b0f0
        fb #7030a0
        stj #953735
        bi #632523
        wind #95b3d7
        temp #da8137
        */
        "series": [
            {
                visible: false,
                showInLegend: false,
                color: "#efefef",
                yAxis: 0,
                type: 'column',
                pointPadding: 0,
                groupPadding: 0,
                borderWidth: 0,
                zIndex: -1
            },
            {
                color: "#00b0f0",
                legendIndex: 0,
            },
            {
                color: "#7030a0",
                legendIndex: 2
            },
            {
                color: "#953735",
                legendIndex: 4
            },
            {
                color: "#632523",
                legendIndex: 6
            },
            {
                color: "#99adc5",//"#b9cde5",
                yAxis: 1,
                type: 'column',
                borderWidth: 0,
                legendIndex: 1,
                zIndex: -1,
                tooltip: {
                    valueSuffix: ' mm'
                },
            },
            {
                color: "#95b3d7",
                yAxis: 1,
                dashStyle: 'ShortDot',
                legendIndex: 3,
                tooltip: {
                    valueSuffix: ' km/h'
                },
            },
            {
                color: "#da8137",
                yAxis: 1,
                dashStyle: 'ShortDot',
                legendIndex: 5,
                tooltip: {
                    valueSuffix: ' °C'
                },
            },
        ],
        "xAxis": {
            type: "datetime",
            dateTimeLabelFormats: {
                day: '%d.%m.%y',
                week: '%d.%m.%y',
                month: '%d.%m.%y'
            },
            plotBands: plotBands,
        },
        yAxis: [{
            min: -20,
            gridLineColor: '#B9CFD7',
            gridLineWidth: 0.5,
            title: {
                style: {
                    color: "#000000",
                    fontSize: null
                },
                text: null
            },
            labels: {
                style: {
                    color: "#000000"
                },
                x: -10
            }
        },
        {
            opposite: true,
            min: 0,
            gridLineColor: '#B9CFD7',
            gridLineWidth: 0.5,
            title: {
                style: {
                    color: "#000000",
                    fontSize: null
                },
                text: null
            },
            labels: {
                style: {
                    color: "#000000"
                },
                x: 10
            }
        }],
        legend: {
            enabled: true,
            layout: "horizontal",
            verticalAlign: "top",
            align: "left",
            alignColumns: false,
            itemWidth: 160,
            itemStyle: {
                textOverflow: undefined,
                whiteSpace: 'nowrap',
            },
            labelFormatter: function () {
                return this.name.replace('Windgeschwindigkeit', 'Windgeschw.');
            }        
        },
        tooltip: {
            useHTML: true,
            valueSuffix: ' µg/m<sup>3</sup>'
        },
        navigator: {
            //  enabled: true
        },
    }
}());

