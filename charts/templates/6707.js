(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
    labels:{
    	rotation:-45,
    }
  },
  "yAxis": {
    //"min": 0, 
    //tickInterval: 1,
    tickAmount: 6,
	  "labels": {
		  "format": "{value}%"
	  }
  },	
  "tooltip": {
    "shared": false, 
    headerFormat: '<span style="font-size: 10px">Alter: {point.key}</span><br/>',
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'
  },
 "series": [
 {"color":  "#b00000"}, /**/
  {"color": "#cd9c00"}, /**/
  ],
   "legend": {
    "enabled": true,
    //"x": 45,
    //"y": 35,
    "itemWidth": 100,
    "layout": "horizontal",
    "verticalAlign": "top",
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