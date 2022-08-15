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
			seriesMapping:
				[
					{
						x: 0, y: 2
					},
				]
		},
		legend: {
			enabled: false
		},
		"series": [{
			type: 'pie',
			innerSize: '40%',
			borderWidth: 0,
			colors: [
				'#FFDA80',
				'#CD9C00',
				'#45381D',
			],
			dataLabels: {
				enabled: true,
				format: '{point.name}',
				distance: 15,
				connectorWidth: 0,
				style: {
					color: 'black',
					textOutline: "0px black",
					fontWeight: "normal",
					fontSize: "12px"
				}
			}
		}],
		"tooltip": {
			"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} </b> ({point.percentage:.1f}%)',
			"shared": false
		}
	};
}());
