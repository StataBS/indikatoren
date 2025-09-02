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
		},
		"legend": {
			"enabled": false
		},
		"series": [{ "color": "#68ab2b" }
		],
		"tooltip": {
			"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.2f}%</b><br/>'
		},
	}
}());