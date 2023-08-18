/*global $*/
(function () {
	return {
		plotOptions: {
			pie: {
				size: 250,
			},
			series: {
				allowPointSelect: false,
				point: {
					events: {
						legendItemClick: function (event) {
							event.preventDefault();

						}
					}
				}
			}
		},
		data: {
			seriesMapping: [
				{
					x: 6, y: 3
				},
			]
		},
		legend: {
			enabled: false
		},
		series: [{
			type: 'pie',
			innerSize: '40%',
			borderWidth: 0,
			colors: [
				'#661200',
				'#B00000',
				'#DC440E',
				'#A8C3CA',
				'#689199',
				'#246370'
			],
			dataLabels: {
				enabled: true,
				useHTML: true,
				formatter: function () {
					return this.point.name.replace(".", ",");

				},
				distance: 15,
				connectorWidth: 1,
				style: {
					color: 'black',
					textOutline: "0px black",
					fontWeight: "normal",
					fontSize: "12px"
				}
			}
		}],
		tooltip: {
			pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} </b> ({point.percentage:.1f}%)<br/>',
			shared: false
		}
	};
}());
