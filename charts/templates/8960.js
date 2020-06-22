(function () {
	return {
		"chart": {
		//	"marginBottom": 65,
		//	"marginTop": 100,
			"type": "column"
		},
		"plotOptions": {
			"series": {
				"stacking": "percent",
				pointPadding: 0.1,
				groupPadding: 0.1,
				borderWidth: 0
			}
		},
		"xAxis": {
			"type": "category"
		},
		"yAxis": {
			tickInterval: 20,
			"labels": {
				"format": "{value}%",
			},
			"reversedStacks": false
		},
		"tooltip": {
			"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}:<br/><b>{point.y}</b> Personen (<b>{point.percentage:.1f}%</b> von Total {point.stackTotal: ,2f} Personen)<br/>',
			"shared": false
		},
		"legend": {
			"enabled": true,
			"layout": "horizontal",
			"verticalAlign": "top",
			"align": "left",
			"itemMarginBottom": 5,
			"x": 40,
			//"y": 30,
			//itemWidth: 130,
		},
		"series": [
			{
				"color": "#d00000",
				"stack": "m",
				"legendIndex": 2
			},
			{
				"color": "#00bAf3",
				"stack": "m",
				"legendIndex": 0
			},
			{
				"color": "#ffaaaa",
				"stack": "w",
				"legendIndex": 3
			},
			{
				"color": "#80eAf3",
				"stack": "w",
				"legendIndex": 1
			}
		],
	}
}());
