(function () {
  return {
    chart: {marginRight: 15},
    xAxis: {
      tickPositioner: function () {
        var interval = 2,
          ext = this.getExtremes(),
          i = ext.dataMax,
          pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      }, 
      labels:{
        rotation: 0
      }
    },
    "yAxis": {
      tickAmount: 5,
     // max: 40,
      "labels": {
        "format": "{value:,.0f}%"
      }
    },
    "series": [
      {"color": "#cd9c00"}
    ],
    "legend": {
      "enabled": false,
      },
    "plotOptions": {
      "line": {
        "connectNulls": true,
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    }
  }
}());
/*
(function(){
    return {
   "yAxis": {
     tickAmount: 5,
    "labels": {
      "format": "{value:,.0f}%",
    }
  },
  xAxis: {
    tickPositioner: function () {
      var interval = 2,
        ext = this.getExtremes(),
        i = ext.dataMax,
        pos = [i];
      while (i >= ext.dataMin) pos.unshift(i = i - interval);
      return pos;
    }, 
    labels:{
	  	rotation: 0
	  }
  },
  "series": [
    {"color": "#cd9c00"}
  ],
};
}());

*/