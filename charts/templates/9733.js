(function(){
    return {
  "yAxis": {
	"labels": {
		"format": "{value:,.0f}%"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>'
  },
  "series": [
    {
  	  color: "#4f81bd",
  	}, /* dunkelblau */
  	{
  	  color: "#662673", 
  	}, /* dunkelviolett */
  	{
      color: "#7F5F1A", 
      marker: {
        enabled: true
      }
    }, /* dunkelbraun */
    {
  	  color: "#FABD24", 
  	}, /* dunkelgelb */
  	
  ],
   "legend": {
    "enabled": true,
    itemDistance: 5, 
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
  },
  "plotOptions": {
    "line": {
      "marker":{
        "enabled": false,
        "symbol": "circle",
       // radius: 2
      }
    }
  }
}
}());
 