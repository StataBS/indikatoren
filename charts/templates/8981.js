(function(){
    return {
  "yAxis": {
      tickInterval: 100,
    "labels": {
      "format": "{value:,.0f}",
    },
  },
  "xAxis": {
    "tickInterval": 12,
     "type": "category",
     labels:{
      // x: 20,
     		"formatter": function() {
   			 return this.value.split("-").slice(0, -1);
		},
     }
  },
  "legend": {
    "enabled": false
  },
  "series": [
    {
    "color": "#B00000"
    }
  ],
  "tooltip": {
    valueDecimals: 0,
    "shared": false
  },
  "chart": {
    "type": "column"
  }
	};
}());
