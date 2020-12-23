(function () {
	return {
		chart: {
			spacingTop: 5,
			inverted: true,
		},
		"series": [
			{ "color": "#083038", index: 4, legendIndex: 4}, // dunkelblau
			{ "color": "#FABD24", index: 3, legendIndex: 3}, // grün
			{ "color": "#A8C3CA", index: 2, legendIndex: 2}, // orange
			{ "color": "#C8C8C8", index: 1, legendIndex: 1}, // hellgrau
			{ "color": "#6F6F6F", index: 0, legendIndex: 0}, // grau
		],
		xAxis: {
			type: "category",
			labels: {
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
					var formattedSum = Highcharts.numberFormat(sum, 0, ",", " ")
					return this.value + ' (' + nString + sum + ')';
				},
			},
		},
		yAxis: {
			tickInterval: 25,
		},
		legend: {
			reversed: true,
			alignColumns: false,
			itemWidth: 77,
			layout: 'horizontal',
			align: 'left',
			verticalAlign: 'top',
			labelFormatter: function () {
				return this.name;
			},
			itemStyle: {
				textOverflow: undefined,
				whiteSpace: 'nowrap',
			}
		}
	};
}());

