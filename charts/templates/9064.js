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
						x: 1, y: 3
					},
				]
		},
		legend: {
			enabled: false
		},
		series:
			[
				{
					type: 'pie',
					innerSize: '40%',
					borderWidth: 0,
					colors: [
						'#D3E2E4',
						'#B00000',
						'#689199',
						'#DC440E',
						'#083038'
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
			useHTML: true,
			headerFormat: '<span style="font-size: 10px"> {point.key}</span><br/>',
			"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.percentage:.1f}%)<br/>',
			"shared": false
		}
	};
}());
