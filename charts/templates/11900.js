(function () {
	return {
    "chart": {
      "type": "column",
			spacingBottom: 40
		},
		title:{
			margin: 30
		},
		xAxis:{
			//"type": "category",
			min:2014,
			max:2024,
			tickInterval: 2,
			labels:{
				step:1
			}
		},
		"yAxis": {
			"min": 0,
			"labels": {
				"format": "{value:,.0f}%"
			}
		},
		legend:{
			enabled: false
		},
		"tooltip": {
      "pointFormatter": function () {
        return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '% </b>'
      },
    },
		"series": [
			{
				"color": "#990300"
			}
		],
	};
}());