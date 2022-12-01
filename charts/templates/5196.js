(function(){
    return {
   "yAxis": {
   	min: 50,
    "labels": {
      "format": "{value:,.0f}",
    }
  },
  "xAxis": {
    labels: {
      //rotation: -45
    },
    tickPositioner: function () {
      var interval = 3,
        ext = this.getExtremes(),
        i = ext.dataMax,
        pos = [i];
      while (i >= ext.dataMin) pos.unshift(i = i - interval);
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

