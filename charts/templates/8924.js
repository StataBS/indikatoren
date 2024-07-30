(function () {
    return {
        "chart": {
            "type": "column",
            spacingRight: 10

        },
        "yAxis": {
            tickAmount: 6,
            labels: {
                format: "{value:,.0f}",
            },
        },
        xAxis: {
            //min: 1961,
            //max: 2019,
           //tickInterval: 1,
            labels: {
                step: 1
            },
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
            "color": "#8b2223",
            borderWidth: 0
        }],
    };
}());

