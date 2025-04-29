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
            enabled: true,
            align: 'left',
            y: -250,
            floating: true,
            symbolRadius: 0,
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
        "tooltip": {
            useHTML: true,
            "formatter": function (args) {
                if (!this.point["GMDNR"]) {
                    //Grenzen, Massstab
                    return '<span style="color:' + this.color + ';">\u25CF </span><span>' + this.series.name + '</span>';
                } else {
                    if (Highcharts.charts[0].legend.title != undefined) var einheit = Highcharts.charts[0].legend.title.text.textStr; else var einheit = '';
                    return '<span style="color:' + this.color + ';">\u25CF</span><span style="font-size: 0.85em;"> ' + this.series.name + ':</span><br/>' +
                        this.point.properties.GMDNAME + ': <b>' + Highcharts.numberFormat((this.point.value), 0) + ' ' + einheit + '</b>';
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
            },
            {
                name: 'Grenze',
                animation: true,
                type: 'mapline',
                data: borderDataTrinat,
                color: 'black',
                tooltip: {
                    pointFormatter: function () {
                        return '<br/>';
                    }
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
