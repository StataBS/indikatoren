(function () {
	return {
		"chart": {
			"type": "column"
		},
		"yAxis": {
			"labels": {
				"format": "{value:,.0f}",
			},
		},
		"xAxis": {
			"tickInterval": 1
		},
		"legend": {
			"enabled": true,
			"layout": "horizontal",
			"verticalAlign": "top",
			"itemMarginBottom": 5,
			"align": "left",
		},
		"series": [
			{
				"color": "#933F8D"
			},
			{
				"color": "#aaaaaa",
				type: "line",
				dashStyle: 'ShortDash',
				marker: {
					symbol: 'circle',
					"enabled": false		
				}
			},
		],
		"tooltip": {
			//valueDecimals: 1,
			//"shared": false
		}
	};
}());