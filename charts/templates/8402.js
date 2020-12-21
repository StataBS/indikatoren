(function(){
    return {
  
      "yAxis": {
        tickAmount: 6,
       "tickInterval": 5,
        "labels": {
          //step: 0.05,
          "format": "{value:,.0f}%",
        },
      },
  "xAxis": {
    "type": "category",
    "labels": {
      rotation: 309,
      step: 1,
    },
  },
  "legend": {
    "enabled": false
  },
  "series": [
    {"color": "#FF8028"}
  ],
  "tooltip": {
    "shared": false,
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
  },
  "chart": {
   // "marginBottom": 65,
    //"marginTop": 75,
    "type": "column", 
    
  }
	}
}());