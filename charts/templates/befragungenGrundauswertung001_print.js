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
            width: 665,
            height: 270,//208, //Maps: 325
            //marginLeft: 125,
            //marginRight: 25,
            spacingBottom: 5,
            type: "column",
            style: {
                fontFamily: "Arial"
            }
        },
        plotOptions: {
            series: {
                stacking: "percent",
                borderWidth: 0
            }
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        yAxis: {
            tickInterval: 20,
            max: 100,
            reversedStacks: false,
            gridLineColor: '#B9CFD7',
            gridLineWidth: 0.5,
            lineColor: '#B9CFD7',
            labels: {
                format: "{value}%",
                rotation: 0,
                style: {
                    fontSize: "10px",
                    color: "#000000"
                }
            },
            title: {
                text: null
            }
        },
        xAxis: {
            type: "category",
            lineColor: '#B9CFD7',
            lineWidth: 0.5,
            "uniqueNames": true,
            tickLength: 0,
            title: {
                text: null
            },
            labels: {
                rotation: -45,
                align: "right",
                reserveSpace: true,
                //x: -115,
                useHTML: true,
                style: {
                    fontSize: "10px",
                    color: "#000000",
                    whiteSpace: 'nowrap',
                    textOverflow: "none"
                },
                formatter: function () {
                    return this.value.replace("*", "<b>"); //used for indentation in web-charts
                }
            }
        },
        legend: {
            enabled: true,
            useHTML: false,
            reversed: true,
            layout: "horizontal",
            verticalAlign: "top",
            align: "left",
            //alignColumns: false,
            symbolRadius: 0,
            //margin: 0,
            padding: 0,
            itemDistance: 2,
            itemMarginBottom: 5,
            itemMarginTop: -7,
            itemStyle: {
                fontWeight: "normal",
                fontSize: "10px",
                color: '#000000',
                //width: 115,
                textOverflow: "none"
            }
        },
        credits: {
            enabled: true,
            position: {}
        }
    };
}());