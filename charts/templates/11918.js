(function () {
	return {
		plotOptions: {
			arearange: {
				lineWidth: 0.5,
				fillOpacity: 0.2,
				zIndex: -1,
				tooltip: {
					crosshairs: true,
					shared: true
				},
				marker: { states: { hover: { enabled: false } } }
			},
			line: {
				tooltip: {
					crosshairs: true,
					shared: true
				},
			},
			series: {
				turboThreshold: 0
			}
		},
		"xAxis": {
			tickInterval: 1,
		},
		legend: {
			enabled: true,
			layout: "horizontal",
			verticalAlign: "top",
			align: "left",
		},
		tooltip: {
			formatter: function (e) {
				//use shared tooltip for group of series only (instead of for all)
				//source: https://jsfiddle.net/BlackLabel/gq1d1aba/

				//console.log(this.point.series);

				var point = this.point,
					series = point.series,
					chart = series.chart,
					correspondingSeries = series.linkedSeries[0] || series.linkedParent,
					linePoint,
					arearangePoint,
					correspondingPoint,
					firstLine = '';

				if (correspondingSeries === undefined) return e.defaultFormatter.call(this, e);
				else {
					// unselect previously selected point
					if (chart.extraHoveredPoint) {
						chart.extraHoveredPoint.setState('');
					}

					// find corresponding point
					if (correspondingSeries) {
						//console.log(correspondingSeries,  correspondingSeries.points, point.index);
						//console.log(point.index, this.series.cropStart);
						correspondingPoint = correspondingSeries.points[point.index - this.series.cropStart];
						correspondingPoint.setState('hover');
						chart.extraHoveredPoint = correspondingPoint;
					}

					// identify type of points for formatting purposes
					if (point.low !== undefined) {
						arearangePoint = point;
						linePoint = correspondingPoint;
					} else {
						arearangePoint = correspondingPoint;
						linePoint = point;
					}
					//console.log(this);
					if (linePoint.y !== null) firstLine = "<span style='color:" + linePoint.series.color + "'>●</span> " +
						linePoint.series.name + ": <b>" + linePoint.y + " °C</b><br>";

					return "<span style='font-size: 10px'>" + this.x + "</span><br>" +
						firstLine +
						arearangePoint.series.name.replace('Untere Grenze', '') + ": <b>" + arearangePoint.low + "</b> bis <b>" + arearangePoint.high + "</b> °C";
				}
			}
		},
		"series": [
			{
				id: "a",
				"color": "#71A3B5",
			},
			{
				"color": "#256370",
				type: 'arearange',
				linkedTo: "a",
			},
			{
				"color": "#FF8028",
				"tooltip": {
					"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.2f} °C</b><br/>'
				},
			},
		],
	}
}());

