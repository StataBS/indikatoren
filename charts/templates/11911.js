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
		"series": [{ "color": "#007A2F" }
		],
		"tooltip": {
			"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>'
		},
	}
}());