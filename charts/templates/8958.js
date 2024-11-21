(function () {
	return {
		chart: {
			//marginRight: 20,
			width: 665,
		},
		"plotOptions": {
			"line": {
				"connectNulls": true,
				"marker": {
					"enabled": false,
					"symbol": "circle",
				}
			}
		},
		"xAxis": {
			tickPositioner: function () {
				var interval = 3,
					ext = this.getExtremes(),
					i = ext.dataMax,
					pos = [i];
				while (i >= ext.dataMin) pos.unshift(i = i - interval);
				return pos;
			}
		},
		"yAxis": {
			tickInterval: 10,
			"labels": {
				"format": "{value:,.0f}"
			}
		},
		"legend": {
			"enabled": true,
			"layout": "vertical",
			"verticalAlign": "middle",
			"align": "right",
			"itemMarginBottom": 3,
			//itemWidth: 200,
			//width: 220,
			/*itemStyle: {
				textOverflow: "none",
				whiteSpace: "nowrap"
			},*/
			labelFormatter: function () {
				return this.name.replace(' (', '<br>(').replace('Bebauung', 'Beb.').replace('keine Beb.', 'keine Bebauung');
			}
		},
		"tooltip": {
			"shared": false,
			"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .0f}</b><br/>'
		},
		"series": [
			{
				"color": "#007a2f"
			},
			{
				"color": "#2f656b"
			},
			{
				"color": "#923f8d"
			},
			{
				"color": "#990300"
			},
			{
				"color": "#73b97c"
			},
			{
				"color": "#fabd24"
			},

		],
	}
}());
