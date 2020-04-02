(function(){
    return {
   "yAxis": {
    "labels": {
      "format": "{value:,.0f}",
    }
  },
  "xAxis": {
  "tickInterval": 1,
  labels:{
    rotation:0
  }
  },
  "series": [
    {
      "color": "#73BA7C"
    }
  ],
  "tooltip": {
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    "shared": false
  },
  chart: {
    spacingTop: 5, 
    marginRight: 5,
    "type": "column"
  }
};
}());

