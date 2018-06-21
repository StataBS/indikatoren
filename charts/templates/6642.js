(function(){
    return {
   "yAxis": {
     tickAmount: 5,
    "labels": {
      "format": "{value:,.0f}%",
    }
  },
  "xAxis": {
	  "tickInterval": 5,
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

