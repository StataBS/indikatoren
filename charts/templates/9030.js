(function(){
    return {
   "yAxis": {
    "labels": {
      "format": "{value:,.0f}",
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
      "color": "#8b2223"
    }
  ],
  "tooltip": {
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    "shared": false
  },
  
}
}());

