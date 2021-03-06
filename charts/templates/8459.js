(function () {
	return {
		"xAxis": {
			"tickInterval": 1,
		},
		"yAxis": {
			"labels": {
				"format": "{value:,.0f}",
			},
			"min": 0,
			"max": undefined,
			tickInterval: 100000
		},
		"series": [
			{ "color": "#B375AB" }, /**/
			{ "color": "#923F8D" }, /**/
			//			{ "color": "#2E1435", "yAxis": 1 }, /**/
		],
		"legend": {
			"enabled": true,
			"layout": "horizontal",
			"verticalAlign": "top",
			"align": "left",
			labelFormatter: function () {
				return this.name.replace(' Reinvermögen', '');
			 }			
		},
	}
}());