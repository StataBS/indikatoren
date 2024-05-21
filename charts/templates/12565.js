(function () {
	return {
		"chart": {
			marginLeft: 200,
			//marginBottom: 100,
			"inverted": true,
		},
		plotOptions: {
			column: {
				groupPadding: 0,
			}
		},
		"xAxis": {
			"type": "category",
			reversed: false,
			"labels": {
				align: "left",
				x: -180,
				"formatter": function () {
					//add sum of observations of visible series to the axis label
					var allVisibleSeries = this.chart.series.filter(function (val, i, arr) {
						return val.visible;
					});
					var indexOfCurrentValue = this.axis.names.indexOf(this.value);
					var sum = allVisibleSeries.reduce(function (accumulator, series, index, arr) {
						return accumulator + series.yData[indexOfCurrentValue];
					}, 0);
					//use N if all series are visible, otherwise use n
					var nString = (this.chart.series.length == allVisibleSeries.length) ? 'N=' : 'n=';
					//check for value that contains only spaces
					return (this.value.replace(/\s/g, "") == "") ? this.value : this.value + '';
				}
			}
		},
		yAxis: {
			tickInterval: 20,
			max: 100,
		},
		"series": [
			{ "color": "#007A2F", index: 5, legendIndex: 1 }, /*dunkelgrün*/
			{ "color": "#73B97C", index: 4, legendIndex: 2 }, /*hellgrün*/
			{ "color": "#FABD24", index: 3, legendIndex: 3 }, /*hellrot*/
			{ "color": "#DC440E", index: 2, legendIndex: 4 }, /*dunkelrot*/
			{ "color": "#C8C8C8", index: 1, legendIndex: 5 },
			{ "color": "#6F6F6F", index: 0, legendIndex: 6 },
		],
		"legend": {
			"layout": "horizontal",
			"verticalAlign": "top",
			"align": "left",
		},
	}
}());
