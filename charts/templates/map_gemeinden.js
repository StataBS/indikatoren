//Simple Wohnviertel Choropleth Map without ranks and with simple tooltip

/* 
    global Highcharts
    global rheinDataEPSG2056
    global scalebarDataEPSG2056
    global UA_Gemeinden_100
*/

(function () {
    return {
        "chart": {
            events: {
                load: function () {
                    this.credits.element.onclick = function () { };
                }
            },
            "borderColor": "#fbfbfb",
            "backgroundColor": "#fbfbfb",
            "width": 485,
            "height": 415,
            "spacingBottom": 40,
            "style": {
                "fontFamily": "Arial"
            },
            "type": "map",
            "inverted": false
        },
        "title": {
            "style": {
                "fontSize": "14px",
                "fontWeight": "bold",
                "fontFamily": "Arial",
                "color": "#000000"
            },
            "align": "left"
        },
        "subtitle": {
            "style": {
                "fontSize": "12px",
                "fontWeight": "normal",
                "fontFamily": "Arial",
                "color": "#000000"
            },
            "text": "",
            "align": "left"
        },
        "credits": {
            "enabled": true,
            "style": {
                "color": "#000000",
                "fontSize": "10px",
                "cursor": "default"
            },
            "position": {
                "align": "left",
                "verticalAlign": "bottom",
                "x": 10
            }
        },
        "colorAxis": {
            "min": 0,
            "gridLineColor": "#fbfbfb",
            "gridLineWidth": 1,
            "labels": {
                "style": { "color": "black", "cursor": "default", "fontSize": "11px", "textOverflow": "none" }
            },
            "marker": {
                "color": "black"
            }
        },
        "mapNavigation": {
            "enabled": true,
            "buttonOptions": {
                "align": "left",
                "verticalAlign": 'bottom'
            }
        },
        "legend": {
            useHTML: false,
            "enabled": true,
            align: 'left',
            y: -250,
            "floating": true,
            itemStyle: {
                fontWeight: 'normal'
            },
            "title": {
                "style": {
                    "fontWeight": "normal",
                    "fontSize": "12px"
                }
            }
        },

        "afterSeries": [
            {
                name: 'Massstab',
                animation: true,
                type: 'mapline',
                data: scalebarDataTrinat,
                color: 'black',
                tooltip: {
                    pointFormatter: function () {
                        return '<br/>';
                    }
                },
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return '5 km';
                    },
                    style: { fontSize: "12px", fontWeight: "normal", color: 'black' },
                    y: -10
                }
            }
		],
        customFunctions: {
            addLegendRectangle: function (chart, x, y, width, height, fill, cssClass) {
                return chart.renderer.rect(x, y, width, height).attr({
                    'stroke-width': 0,
                    fill: fill,
                    zIndex: 6,
                    class: cssClass
                }).add();
            },
        }
    };
}()
);
