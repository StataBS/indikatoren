(function () {
	return {
		xAxis: {
      tickPositioner: function () {
        var interval = 2,
          ext = this.getExtremes(),
          i = ext.dataMax,
          pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      }
    },
		"yAxis": {
			"labels": {
				"format": "{value:,.0f}",
			},
			"min": 0,
			"max": undefined,
			tickInterval: 100000
		},
		"series": [
			{ "color": "#B375AB" }, /**/
			{ "color": "#923F8D" }, /**/
			//			{ "color": "#2E1435", "yAxis": 1 }, /**/
		],
		"legend": {
			"enabled": true,
			"layout": "horizontal",
			"verticalAlign": "top",
			"align": "left",
			//"itemMarginBottom": 5,
			labelFormatter: function () {
				return this.name.replace(' Reinvermögen', '');
			 }			
		},
	}
}());