(function () {
	return {
		"chart": {
			"type": "column",
//			"inverted": false
		},
		plotOptions: {
			series: {
	//			pointPadding: 0,
				borderWidth: 0,
			}
		},
		"xAxis": {
			"type": "category"
		},
		"yAxis": {
			//"min": 0,
			//"max": 0.5,
			"labels": {
				"format": "{value:,.0f}%"
			}
		},
		"series": [
			{ "color": "#68AB2B" },
			{ "color": "#0A3B19" },
		],
		"legend": {
			"enabled": true,
			"layout": "horizontal",
			"verticalAlign": "top",
			"align": "left",
		},
		tooltip: {
			pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
		},
	}
}());

