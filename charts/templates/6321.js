(function(){
    return {
   "yAxis": {
     tickAmount: 4,
    "labels": {
      "format": "{value:,.0f}",
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

