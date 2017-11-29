(function(){
    return {
  "xAxis": {
    "tickInterval": 1
  },
  "yAxis": {
    "min": undefined, 
    tickAmount: 5,
  	"labels": {
  		"format": "{value:,.0f}"
  	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,,.1f}</b><br/>'
  },
  "series": [
    {"color": "#b00000 ",
    legendIndex: 1,
    }, /* rot */
	{"color": "#672773",
    legendIndex: 2,
    }, /* violett */
  	{"color": "#007a2f",
    legendIndex: 0,
    },/* grün  */
    {"color": "#008AC3",
    legendIndex: 3,
    },/* blau  */
  ],
  "legend": {
    "enabled": true,
    //"x": 30,
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
 