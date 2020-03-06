(function () {
    return {
        "plotOptions": {
            "series": {
                "pointWidth": 100,
            },
        },
        "series": [
            {
                "color": "#71A3B5",
                index: 2
            },
            {
                "color": "#FFBB58",
                index: 1
            },
            {
                "color": "#8A8A8A",
                index: 0
            }
        ],
        "xAxis": {
            "type": "category",
            labels: {
                formatter: function () {
                    return this.value.replace(' ', '<br>'); //formatter wieder entfernen, sobald im TSV absolute statt %-Werte stehen, da dann (N=XY) automatisch kommt /BL, 14.1.2020
                }
            }
        },
        "legend": {
            "reversed": false
        }
    }
}());

