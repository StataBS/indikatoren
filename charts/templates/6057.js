(function(){
    return {
   "yAxis": {
    "labels": {
      "format": "{value:,.0f}%",
    }
  },
  "xAxis": {
	"tickInterval": 1,
  },
  "series": [
    {
      "marker": {
        "symbol": "circle",
        "enabled": false
      },     
      "color": "#cd9c00"
    }
  ],
  "tooltip": {
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
    "shared": false
  },
};
}());

