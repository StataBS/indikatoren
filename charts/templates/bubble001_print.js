(function () {
    return {
        chart: {
            events: {
                load: function () {
                    this.credits.element.onclick = function () { };
                    //for top-left legends with no x defined: move legend to x position of first yAxis
                    if (this['legend']['options']['align'] == 'left' && this['legend']['options']['verticalAlign'] == 'top' && this['legend']['options']['x'] == 0) {
                        this.update(
                            {
                                legend: {
                                    x: this.yAxis[0].left - this.spacingBox.x - this.legend.padding
                                }
                            }
                        );
                    }
                }
            },
            borderColor: "#fbfbfb",
            backgroundColor: "#fbfbfb",
            width: 320,
            height: 208,
            spacing: [10, 2, 2, 2], /*top, right, bottom and left */
            style: {
                fontFamily: "Arial"
            },
            type: "bubble"
        },
        plotOptions: {
            series: {
                marker: {
                    fillOpacity: 1
                }
            },
            bubble: {
                label: {
                    enabled: true
                },
                dataLabels: {
                    enabled: true,
                    style: {
                        fontSize: '10px',
                        color: 'black',
                        fontWeight: 'normal',
                        textShadow: 'none',
                    },
                    formatter: function () {
                        //return this.key.replace(" ", "<br/>");// + ': ' + this.point.z + '%';
                        return this.key;
                    },
                    inside: false,
                    //align:'left',
                    //verticalAlign: 'top',
                    //verticalAlign: 'middle',
                    //verticalAlign: 'top',
                    y: -10,
                    padding: 0,
                    overflow: false,
                    crop: false
                }
            }
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        yAxis: {
            gridLineColor: '#B9CFD7',
            gridLineWidth: 0.5,
            lineColor: '#B9CFD7',
            title: {
                style: {
                    fontSize: "10px",
                    color: "#000000"
                },
                text: ''
            },
            labels: {
                y: 3,
                style: {
                    fontSize: "10px",
                    color: "#000000"
                }
            },
            min: 0
        },
        xAxis: {
            lineColor: '#B9CFD7',
            //lineWidth: 0.5,
            title: {
                style: {
                    fontSize: "10px",
                    color: "#000000"
                },
                text: ''
            },
            labels: {
                style: {
                    fontSize: '10px',
                    color: "#000000",
                    textOverflow: null,
                    //whiteSpace: 'nowrap',
                }
            },
            tickLength: 0,
        },
        credits: {
            enabled: true,
            style: {
                color: "black",
                fontSize: "10px",
                cursor: "default"
            },
            position: {
                align: "left",
                verticalAlign: "bottom",
                x: 10
            }
        },
        legend: {
            enabled: false,
            symbolRadius: 0
        },
        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="2"><span style="color:{point.color}">\u25CF</span> {point.name}</th></tr>' +
                '<tr><th>X:</th><td>{point.x}</td></tr>' +
                '<tr><th>Y:</th><td>{point.y}</td></tr>' +
                '<tr><th>Size:</th><td>{point.z}</td></tr>',
            footerFormat: '</table>',
            followPointer: true
        },
        exporting: {
            enabled: false
        }
    };
}());
