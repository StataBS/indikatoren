(function(){
    return {
  "xAxis": {
    type: 'category',
    endOnTick: false,
    "tickInterval": 5,
     "labels": {
     	step:1,
      "rotation": 0,
     }
  },
  "yAxis": {
    "min": 0, 
    max: 60,
	  "labels": {
		  "format": "{value}%"
	  }
  },	
  "tooltip": {
    "shared": false, 
    "headerFormat": '<span style="font-size: 10px"> Alter: {point.key}</span><br/>',
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b>%<br/>'
  },
 "series": [
    {
		"color": "#fabd24", // 1997
    	"legendIndex": 2
    }, /* rot */
    {
		"color": "#672773" , // 2006
    	"legendIndex": 2
    }, /* violett */
    {
		"color": "#007a2f", // 2016
    	"legendIndex": 2
    }, /* blau */
  ],
   "legend": {
    "enabled": true,
    //"x": 45,
    "y": 30,
    "itemWidth": 100,
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