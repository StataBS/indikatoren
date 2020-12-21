(function(){
    return {
   "yAxis": {
    "labels": {
	//step: 6,
	tickInterval: 200000,
      "format": "{value:,.0f}",
    }
  },
  /*xAxis: {
	tickPositioner: function () {
		var interval = 2,
			ext = this.getExtremes(),
			i = ext.dataMax,
			pos = [i];
		while (i >= ext.dataMin) pos.unshift(i = i - interval);
		return pos;
	}
},*/
  "series": [
    {
      "marker": {
        "symbol": "circle",
        "enabled": false
      },     
      "color": "#8b2223"
    }
  ],
  "tooltip": {
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    "shared": false
  },
  
}
}());

