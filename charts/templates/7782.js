(function(){
    return {
   "yAxis": {
   	min: 50,
    "labels": {
      "format": "{value:,.0f}",
    }
  },
  "xAxis": {
	"tickInterval": 3,
  type: "category", /* ausprobieren, ob "category" oder nicht - hat Auswirkung auf den Abstand der letzten Jahreszahl zu rechten Rand */
  tickPositioner: function () {
    var maxlabels = 12,
      ext = this.getExtremes(),
      i = Math.round(ext.max),
      interval = Math.round((i - ext.min)/maxlabels),
      pos = [i];
    while (i >= ext.min) pos.unshift(i = i - interval);
    return pos;
  }
  },
  "series": [
    {
      "color": "#8b2223"
    }
  ],
  "tooltip": {
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
    "shared": false
  },
  "plotOptions": {
    "series": {
          },
    
    
  }
}
}());

