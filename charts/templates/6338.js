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
      "marker": {
        "enabled": false
      }    
    }, /* dunkelrot */
  	{
  	  "color": "#4f81bd",
  	  legendIndex: 2,
      "marker": {
        "enabled": false
      }    
    }, /* dunkelblau */
  	{
  	  "color": "#662673",
  	  legendIndex: 1,
      "marker": {
        "enabled": false
      }    
    }, /* dunkelviolett */
  	{
  	  "color": "#FABD24",
  	  legendIndex: 3,
      "marker": {
        "enabled": false
      }    
    }, /* dunkelgelb */
  	{
  	  "color": "#3C3C3C",
	    legendIndex: 0,
      "marker": {
        "enabled": true
      }    
    }, /* schwarz */
  ],
  "legend": {
    "enabled": true,
    //"x": 45,
    //"y": 35,
    "itemWidth": 132,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    margin: 1,
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
 