(function(){
    return {
   "yAxis": {
    "labels": {
      "format": "{value:,.0f}",
    }
  },
  "xAxis": {
	//tickInterval: 2,
  labels: {
    rotation: -45
  },
  tickPositioner: function () {
		var interval = 2,
			ext = this.getExtremes(),
			i = ext.dataMax,
			pos = [i];
		while (i >= ext.dataMin) pos.unshift(i = i - interval);
		return pos;
	}
  },
  "legend": {
    itemDistance: 5,
   "enabled": true,
   "layout": "horizontal",
   "verticalAlign": "top",
   "align": "left",
   "itemStyle": {
     "fontWeight": "normal"
   }
 },
    "series": [
			{ "color": "#b475ab"},
			{ "color": "#662673"}
    ],
  "tooltip": {
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
    "shared": false
  },
  "plotOptions": {
    "line": {
      "marker":{
        "enabled": false,
        "symbol": "circle",
      } 
    }
  }
};
}());

