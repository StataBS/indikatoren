(function(){
    return {
  "xAxis": {
    //"tickInterval": 1
  },
  "yAxis": {
	"labels": {
		"format": "{value:,.3f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
  "series": [
    { /* gelb */
      "color": "#CD9C00"
    },
    { /* schwarz */
      "color": "#3C3C3C",
      dashStyle: 'ShortDash',
      marker: {
        enabled: false, 
        states: {
          hover: {
            enabled: false
          }
        }
      }
    },
  ],
  "legend": {
  	//symbolWidth: 30,
    "enabled": true,
    //"x": 45,
    //"y": 35,
    //"itemWidth": 500,
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
 