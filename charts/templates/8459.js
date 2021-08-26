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
			{ 
				color: "#E7CEE2"
			}, /**/
			{ 
				color: "#2E1435"/*,
				dashStyle: 'shortdot' */
			}, /**/
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