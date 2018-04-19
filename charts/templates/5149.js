(function(){
    return {
  "xAxis": {
    //"tickInterval": 2
  },
  "yAxis": {
  	"labels": {
  		"format": "{value:,.0f}"
  	}
  },	
  "tooltip": {
    "shared": false, 
	  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>'
  },
  "series": [
    {
      "color": "#008AC3",
      legendIndex: 0,
      "marker": {
        "enabled": false
      }
    }, /* grün */
    {
      "color": "#68AB2B",
      legendIndex: 1,
      "marker": {
        "enabled": false
      }    
    }, /* blau */
    {
      "color": "#3C3C3C",
	    legendIndex: 2,
      "marker": {
        "enabled": false
      }    
    }, /* scharz */
  ],
  "legend": {
    "enabled": true,
    //"x": 45,
    //"y": 35,
    "itemWidth": 100,
    "layout": "horizontal",
    "verticalAlign": "top",
    //"itemMarginBottom": 5,
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
};
}());
 