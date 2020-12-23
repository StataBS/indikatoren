(function(){
    return {
  "xAxis": {
    tickPositioner: function () {
      var interval = 2,
        ext = this.getExtremes(),
        i = ext.dataMax,
        pos = [i];
      while (i >= ext.dataMin) pos.unshift(i = i - interval);
      return pos;
    },
    type: "category",
    step: 2, 
    showLastLabel: true,
    EndOnTick: true,
    labels: {
      rotation: -45
    }
  },
  "yAxis": {
    tickInterval: 50000,    
  	"labels": {
  		"format": "{value:,.0f}", 
      y: 3
  	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
  },
  "series": [
    {"color": "#6F6F6F",
    }, /* dunkelgrau */
    	{"color": "#B00000",
    }, /* dunkelrot */
    	{"color": "#4f81bd",
    }, /* dunkelblau */
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "plotOptions": {
    "line": {
	  "connectNulls": true,
      "marker":{
        "enabled": false,
        "symbol": "circle",
      }
    }
  }
}
}());
 