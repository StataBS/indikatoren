(function () {
	return {
		"plotOptions": {
			"line": {
				"connectNulls": true,
				"marker": {
					"enabled": false,
					"symbol": "circle",
				}
			}
		},
		"xAxis": {
			//"tickInterval": 1
		},
		"yAxis": {
			"min": undefined,
			"labels": {
				"format": "{value:,.0f}"
			}
		},
		"tooltip": {
			"shared": false,
			"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
		},
		"legend": {
			"layout": "horizontal",
			"verticalAlign": "top",
			"align": "left",
			"itemMarginBottom": 5,
		},
		"series": [
			{ "color": "black" }, /* black */
			{ "color": "#b00000 " }, /* rot */
			{ "color": "#672773" }, /* violett */
			{ "color": "#008AC3" },/* blau  */
		],
	}
}());
