(function () {
	return {
		plotOptions: {
			series: {
				"stacking": "normal",
				groupPadding: 0,
				borderWidth: 0,
			}
		},
		"yAxis": {
			tickInterval: 500,
			max: 2800,
			"labels": {
				"format": "{value:,.0f}",
				"formatter": function () {
					return Highcharts.numberFormat((this.value), 0) + '';
				},
			}
		},
		"xAxis": {
			"type": "category",
			"tickInterval": 4,
			labels: {
				"formatter": function () {
					return this.value.split("-").slice(0, -1);
				},
			}

		},
		"legend": {
			//y: 55,
			"enabled": true,
			"layout": "horizontal",
			//"itemWidth": 210,
			"verticalAlign": "top",
			"align": "left",
			"itemStyle": {
				"fontWeight": "normal"
			}
		},


		"series": [
			{ "color": "#007A2F", index: 5, legendIndex: 5 }, /* */
			{ "color": "#73B97C", index: 4, legendIndex: 4 }, /* */
			{ "color": "#B00000", index: 3, legendIndex: 3 },  /* */
			{ "color": "#FF8028", index: 2, legendIndex: 2 },  /* */
			{ "color": "#FFBB58", index: 1, legendIndex: 1 }, /* */
			{ "color": "#CD9C00", index: 0, legendIndex: 0 }, /* */
		],
		tooltip: {
			"pointFormatter": function () {
				return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 0) + ' </b>'
			},
		},
		"chart": {
			//height: 600,
			type: "column",
			"inverted": false,
		}
	};
}());





