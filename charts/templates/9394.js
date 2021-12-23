(function () {
    return {
        "chart": {
            "type": "column",
            /*events: {
                load: function () {
                    //add and move legend title (get it from series names)
                    this.legend.title
                        .attr({
                            text:
                                this.series[1].name.split(", ").slice(0, 1).toString()
                                + ':<br>'
                                + this.series[3].name.split(", ").slice(0, 1).toString()
                                + " ("
                                +this.series[3].name.split(" (").slice(-1).toString()
                                + ':'
                        })
                        .translate(-250, 41);
                }
            }*/
        },
        plotOptions: {
            series: {
                minPointLength: 3,
                marker: {
                    enabled: false
                }
            }
        },
        "yAxis": [
            {
                gridLineColor: '#B9CFD7',
                gridLineWidth: 0.5,
                "title": {
                    enabled: false
                },
                "labels": {
                    useHTML: true,
                    "format": "{value:,.0f}",
                    "style": {
                        "color": "#000000"
                    }
                },
                "min": 0
            },
            {
                gridLineColor: '#B9CFD7',
                gridLineWidth: 0.5,
                //tickInterval: 10,
                "title": {
                    enabled: false
                },
                "labels": {
                    "format": "{value:,.0f}",
                    "style": {
                        "color": "#000000"
                    }
                },
                "min": 0,
                "opposite": true
            }
        ],
        "xAxis": {
            "tickInterval": 1
        },
        "legend": {
            "enabled": true,
            "layout": "horizontal",
            "verticalAlign": "top",
            align: "left",
            itemMarginBottom: 2,
            /*align: "right",
            y: -40,
            x: 60,
            width: 250,
            itemWidth: 100,
            itemMarginBottom: 7,
            itemStyle: {
                textOverflow: 'none',
                whiteSpace: 'nowrap',
            },
            labelFormatter: function () {
                //remove text after " ("
                var leg = this.name.split(", ").slice(1).toString().split(" (").slice(0,1).toString();
                if (leg.length < 1) leg = this.name;
                return leg;
            },
            title: {
                text: '-<br>-', //wird via chart.events.load bearbeitet
                style: {
                    fontWeight: 'normal',
                    lineHeight: 19
                }
            },
*/
        },
        tooltip: {
            "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>'
        },
        "series": [
            {
                "color": "#A8C3CA",
                "index": 0,
                zIndex: 2,
                //legendIndex: 5,
                //"type": "line",
                // tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>' }
            },
            {
                "color": "#689199",
                "index": 1,
                zIndex: 2,
                //"stacking": "normal",
                //tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .0f}</b><br/>Total: <b>{point.total:,.0f}</b>' }
            },
            {
                "color": "#FF8028",
                "index": 2,
                zIndex: 3,
                "yAxis": 1,
                "type": "line",
                marker: {
                    enabled: true
                }                
                //"stacking": "normal",
                //tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>Total: <b>{point.total:,.0f}</b>' }
            },
            /*{
                "color": "#DC440E",
                "index": 2,
                zIndex: 3,
                "type": "line",
                "yAxis": 1,
                //  tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>' }
            },
            {
                "color": "#246370",
                "index": 2,
                zIndex: 3,
                "type": "line",
                "yAxis": 1,
                //  tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>' }
            },
*/
        ]
    }
}());
