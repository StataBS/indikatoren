(function () {
	return {
		subtitle:{
			useHTML: true,
		},
		"xAxis": {
			type: "category", /* ausprobieren, ob "category" oder nicht - hat Auswirkung auf den Abstand der letzten Jahreszahl zu rechten Rand */
			tickPositioner: function () {
				var maxlabels = 10,
					ext = this.getExtremes(),
					i = Math.round(ext.max),
					interval = Math.round((i - ext.min) / maxlabels),
					pos = [i];
				while (i >= ext.min) pos.unshift(i = i - interval);
				return pos;
			}
		},
		"tooltip": {
			useHTML: true,
			"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} Mio. m<sup>3</sup></b><br/>'
		},
		"series": [
			{ "color": "#662673" },
			{
				linkedTo: ':previous',
				"color": "#662673"
			},
		],
	};
}());