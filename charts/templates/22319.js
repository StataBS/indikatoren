(function () {
	return {
		"chart": {
			"type": "column"
		},
		xAxis: {
			type: 'category'
		},
		"yAxis": {
			"labels": {
				"format": "{value:,.0f}%"
			},
			max: 25,
			tickAmount: 6
		},
		"legend": {
			"enabled": false
		},
		"series": [{ "color": "#cd9c00" }
		],
		"tooltip": {
			"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.2f}%</b><br/>'
		},
	}
}());