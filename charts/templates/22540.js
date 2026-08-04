(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
  },
  "yAxis": {
    //"min": 0, 
    //tickInterval: 1,
	  "labels": {
		  "format": "{value}%"
	  }
  },	
  
  "tooltip": {
    "shared": true, 
    headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>'
  },

 "series": [
        { "color": "#b375ab"},
 {"color":  "#b00000", visible: false}, /**/
 {"color": "#cd9c00", visible: false}, /**/
  ],
   "legend": {
    "enabled": false,
    //"x": 45,
    //"y": 35,
    "itemWidth": 140,
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
      "marker":{
        "enabled": false,
        "symbol": "circle",
      } 
    }
  }
}
}());