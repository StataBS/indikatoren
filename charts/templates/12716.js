(function () {
	return {
		"plotOptions": {
			"line": {
				"marker": {
					"enabled": false,
					"symbol": "circle",
				}
			}
		},
		"xAxis": {
			//			"tickInterval": 1,
			//type: "category", /* ausprobieren, ob "category" oder nicht - hat Auswirkung auf den Abstand der letzten Jahreszahl zu rechten Rand */
			tickPositioner: function () {
				var maxlabels = 8,
					ext = this.getExtremes(),
					i = Math.round(ext.max),
					interval = Math.round((i - ext.min) / maxlabels),
					pos = [i];
				while (i >= ext.min) pos.unshift(i = i - interval);
				return pos;
			}
		},
		"yAxis": {
			//min: 0,
			//max: 6,
			tickInterval: 500,
			"labels": {
				"format": "{value:,.0f}"
			}
		},
		"tooltip": {
			"shared": false,
			//"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
		},
		"series": [
			{ "color": "#689199" },
			{ "color": "#B375AB" },
			{ "color": "#68AB2B" },//8B2223
			{ "color": "#444444",  dashStyle: "ShortDash"},
			/* {"color": "#474747"}*/
		],
		"legend": {
			"enabled": true,
			"layout": "horizontal",
			"verticalAlign": "top",
			"itemMarginBottom": 5,
			"align": "left",
		},

	}
}());