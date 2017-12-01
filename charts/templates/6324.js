(function(){
    return {
  "xAxis": {
    "tickInterval": 2
  },
  "yAxis": {
    tickAmount: 5,
  	"labels": {
  		"format": "{value:,.0f}"
  	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
  "series": [
    {"color": "#008AC3",
      "marker": {
        "enabled": true
      }    
    }, /* dunkelrot */
  ],
  "legend": {
    "enabled": false,
    //"x":35,
    //"y": 35,
    "itemWidth": 80,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
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
 