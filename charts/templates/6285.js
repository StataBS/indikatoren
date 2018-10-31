(function(){
    return {
   "yAxis": {
      tickInterval: 100000000,
      "labels": {
        "format": "{value:,.0f}",
        y: 3
      }
  },
  "xAxis": {
	  "tickInterval": 1,
  },
  "series": [
    {
      "color": "#8b2223"
    }
  ],
  "tooltip": {
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    "shared": false
  },
  chart: {
    spacingTop: 5,
  },
};
}());

