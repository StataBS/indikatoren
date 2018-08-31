(function(){
    return {
   "yAxis": {
     tickAmount: 5,
    "labels": {
      "format": "{value:,.0f}%",
    }
  },
  "xAxis": {
    //type: 'category',
	  tickInterval: 1,
	  //tickPositions: [1998, 2003, 2008, 2012, 2017],
	  labels:{
	  	rotation: -45,
	  	step: 1,
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

