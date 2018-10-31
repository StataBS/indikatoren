(function(){
    return {
  "xAxis": {
    "tickInterval": 1
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
    {
      "color": "#FABD24",
      legendIndex: 0,
    }, /* hellgelb */
  	{
  	  "color": "#7F5F1A",
      legendIndex: 2,
    }, /* dunkelgelb */
  	{
  	  "color": "#008AC3",
      legendIndex: 1,
    }, /* hellblau */
  	{
  	  "color": "#2B0099",
      legendIndex: 3,
    }, /* dunkelblau */
  	{"color": "#68AB2B",
     legendIndex: 5,
    }, /* violett */
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
};
}());
 