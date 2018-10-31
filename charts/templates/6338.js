(function(){
    return {
  "xAxis": {
    "tickInterval": 2
  },
  "yAxis": {
    tickAmount: 6,
    max: 5000,
  	"labels": {
  		"format": "{value:,.0f}"
  	}
  },	
  "tooltip": {
    "shared": false, 
  	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
  "series": [
    {
      "color": "#B00000",
      legendIndex: 4,
    }, /* dunkelrot */
  	{
  	  "color": "#4f81bd",
  	  legendIndex: 2,
    }, /* dunkelblau */
  	{
  	  "color": "#662673",
  	  legendIndex: 1,
    }, /* dunkelviolett */
  	{
  	  "color": "#FABD24",
  	  legendIndex: 3,
    }, /* dunkelgelb */
  	{
  	  "color": "#3C3C3C",
	    legendIndex: 0,
    }, /* schwarz */
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
 