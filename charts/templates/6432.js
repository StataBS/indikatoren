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
    "shared": false, 
    headerFormat: '<span style="font-size: 10px">Alter: {point.key}</span><br/>',
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>'
  },
 "series": [
 {"color":  "#b00000"}, /**/
  {"color": "#cd9c00"}, /**/
  ],
   "legend": {
    "enabled": true,
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