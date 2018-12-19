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

