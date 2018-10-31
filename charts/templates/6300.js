(function(){
    return {
   "yAxis": {
    "labels": {
      "format": "{value:,.2f}",
    }
  },
  "xAxis": {
	"tickInterval": 2,
  },
  "series": [
    {
      "color": "#8b2223"
    }
  ],
  "tooltip": {
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.3f}</b><br/>',
    "shared": false
  },
  chart: {
    spacingTop: 5,
    marginRight: 5,
  }
};
}());

