(function(){
    return {
  "xAxis": {
    "tickInterval": 1
  },
  "yAxis": {
  	"labels": {
  		"format": "{value}%"
  	}
  },	
  "tooltip": {
    "shared": false, 
	  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>'
  },
  "series": [
    {
      "color": "#B00000",
      legendIndex: 0,
      "marker": {
        "enabled": false
      }
    }, /* grün */
    {
      "color": "#246370",
      legendIndex: 1,
      "marker": {
        "enabled": false
      }    
    }, /* blau */
    {
      "color": "#474747",
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
 