(function () {
    return {
        "chart": {
            "type": "column",
            marginTop: 70,
            marginRight: 10
        },
        plotOptions: {
            column: {
                borderWidth: 0
            }
        },
        "yAxis": {
            tickAmount: 6,
            labels: {
                format: "{value:,.0f}",
                y: 2,
            },
            opposite: false,
        },
        "xAxis": {
            tickPositioner: function () {
                var interval = 10,
                  ext = this.getExtremes(),
                  i = ext.dataMax,
                  pos = [i];
                while (i >= ext.dataMin) pos.unshift(i = i - interval);
                return pos;
              }
        },
        "series": [{
            "color": "#8b2223"
        }
        ],
        "tooltip": {
            "pointFormat": '<span style="color:{series.color}">\u25CF</span> Anzahl Hitzetage: <b>{point.y:,.0f}</b><br/>',
            "shared": false
        },
        /*data: {
            //convert year in first column to UTC date to be used by Highstock
            parsed: function(columns){
                columns[0].forEach(function(v, i, a){
                    columns[0][i] = Date.UTC(columns[0][i]);
                });
            }
        }, */
        rangeSelector: {
            buttons:
                [
                    {
                        count: 10,
                        type: 'year',
                        text: '10 J'
                    },
                    {
                        count: 20,
                        type: 'year',
                        text: '20 J'
                    },
                    {
                        count: 50,
                        type: 'year',
                        text: '50 J'
                    },
                    {
                        type: 'all',
                        text: 'Alle J'
                    }
                ],
            buttonSpacing: 15,
            inputEnabled: false,
            selected: 1,
            inputDateFormat: '%Y',
            inputEditDateFormat: '%Y'
        }
    };
}());

