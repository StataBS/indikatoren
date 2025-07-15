(function () {
  return {
    chart: {
      marginRight: 10
    },
    "xAxis": {
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
      tickInterval: 0.2,
      "labels": {
        "format": "{value:,.1f}",
      }
      //  "tickInterval": 20000
    },
    "series": [
      {
        "color": "#83522E",
      }
    ],
  }
}());
