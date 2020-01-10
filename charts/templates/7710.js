(function () {
	return {
		"xAxis": {
			tickInterval: 2
		},
		"yAxis": {
			"labels": {
				"format": "{value:,.0f}"
			}
		},
		"tooltip": {
			"shared": false,
			"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
		},
		"series": [
			{
				"color": "#dc440e"
			},
			{
				"color": "#008ac3"
			}
		],
		"legend": {
			"enabled": true,
			"layout": "horizontal",
			"verticalAlign": "top",
			"itemMarginBottom": 5,
			"align": "left"
		}
	}
}());
