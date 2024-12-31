(function () {
    return {
        "chart": {
            "type": "column",
            //marginTop: 70,
            marginRight:10
        },
        xAxis: {
            tickPositioner: function () {
                var interval = 10,
                    ext = this.getExtremes(),
                    i = ext.dataMax,
                    pos = [i];
                while (i >= ext.dataMin) pos.unshift(i = i - interval);
                return pos;
            }
        },
        "yAxis": {
            showLastLabel: true,
            endOnTick: true,
            tickAmount: 6,

            labels: {
                format: "{value:,.0f}",
                y: 2,
            },
            opposite: false,
        },
        "series": [{
            "color": "#8b2223",
            borderWidth: 0
        }
        ],
        "tooltip": {
            "pointFormat": '<span style="color:{series.color}">\u25CF</span> Anzahl Hitzetage: <b>{point.y:,.0f}</b><br/>',
            "shared": false
        },
    }
}());

