(function () {
	return {
		"chart": {
			type: "column",
			marginRight: 15,
		},
		"series": [
			{
				"color": "#68AB2B"
			},
			{
				"visible": false
			}
		],
		"data": {
			"parsed": function (columns) {
				//copy columns to the end, then remove the first 5
				columns.push(columns[3]);
				columns.push(columns[1]);
				columns.push(columns[2]);
				columns.splice(0, 5);
			}
		},
		"xAxis": {
			"type": "category",
			"labels": {
				padding: 1,
				step: 1,
				y: 3,
				x: -10,
				"style": {
					"color": "#000000",
					"fontSize": "9px"
				}
			}
		},
		"yAxis": {
			tickInterval: 10,
			"labels": {
				"formatter": function () {
					return Highcharts.numberFormat((this.value), 0, ".", "");
				}
			}
		}
	}
}());
