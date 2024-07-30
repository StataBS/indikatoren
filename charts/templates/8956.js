(function () {
	return {
		"chart": {
			marginLeft: 100,
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
				x: -80,
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
					var formattedSum = Highcharts.numberFormat(sum, 0, ",", "")
					//check for value that contains only spaces
					return (this.value.replace(/\s/g, "") == "") ? this.value : this.value + ' (' + nString + formattedSum + ')';
				}
			}
		},
		yAxis: {
			tickInterval: 25,
			max: 100,
			labels: {
				y: 10
			}
		},
		"series": [
			{ "color": "#007A2F", index: 5, legendIndex: 1 }, /*dunkelgrün*/
			{ "color": "#73B97C", index: 4, legendIndex: 2 }, /*hellgrün*/
			{ "color": "#FABD24", index: 3, legendIndex: 3 }, /*hellrot*/
			{ "color": "#CD9C00", index: 2, legendIndex: 4 }, /*dunkelrot*/
			{ "color": "#C8C8C8", index: 1, legendIndex: 5 },
			{ "color": "#6F6F6F", index: 0, legendIndex: 6 },
		],
		legend: {
			layout: "horizontal",
			align: "left",
			verticalAlign: "top",
			reversed: false,
			alignColumns: false,
			itemWidth: 110,
			labelFormatter: function () {
				return this.name;
			},
			itemStyle: {
				textOverflow: undefined,
				whiteSpace: 'nowrap',
			}
		},
	}
}());
