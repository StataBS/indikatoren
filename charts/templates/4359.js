(function(){
    return {
  
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}%",
    } 
  },
  "xAxis": {
    "type": "category",
    "tickInterval": 1
  },
  "legend": {
    "enabled": false
  },
  "series": [
    {
    "color": "#67401E"
    }
  ],
  tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.2f}%</b><br/>',
    shared: false
  }, 
  "chart": {
    "marginBottom": 75,
    "marginTop": 75,
    "type": "column"
  }
	}
}());