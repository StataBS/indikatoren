(function(){
    return {
   "yAxis": {
     tickAmount: 5,
    "labels": {
      "format": "{value:,.0f}%",
    }
  },
  "xAxis": {
    type: 'category',
	  "tickInterval": 5,
	  //tickPositions: [1997, 2002, 2007, 2012, 2017],
	  labels:{
	  	rortation:0,
	  }
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
  chart: {
    spacingTop: 7
  }
};
}());

