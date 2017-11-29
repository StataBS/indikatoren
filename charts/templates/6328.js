(function(){
    return {
  "xAxis": {
    "tickInterval":2
  },
  "yAxis": {
    tickAmount: 5,
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
      "color": "#B00000",
      visible:true,
      "marker": {
        "enabled": false
    }    
    }, /* dunkelrot */
  	{
  	  "color": "#007A2F",
	    visible:true,
      "marker": {
        "enabled": false
      }    
    }, /* dunkelgrün */
  	{
  	  "color": "#4f81bd",
	    visible:true,
      "marker": {
        "enabled": false
      }    
    }, /* dunkelblau */
  	{
  	  "color": "#662673",
    	visible:true,
          "marker": {
            "enabled": false
      }    
    }, /* dunkelviolett */
    {
      "color": "#7F5F1A",
      visible:true,
      "marker": {
        "enabled": false
      }    
    }, /* dunkelbraun */
  	{
  	  "color": "#FABD24",
	    visible:true,
      "marker": {
        "enabled": false
      }    
    }, /* dunkelgelb */
  	{
  	  "color": "#3C3C3C",
	    visible:true,
      "marker": {
        "enabled": true
      }    
    }, /* schwarz */
  ],
  "legend": {
    "enabled": true,
    "itemMarginBottom": 5,
    "itemStyle": {
      "fontWeight": "normal"
    }, 
    verticalAlign: 'middle',
  },
  "plotOptions": {
    "line": {
	  "connectNulls": true,
      "marker":{
        "enabled": false,
        "symbol": "circle",
      }
    }
  },
  chart:{
	  //marginBottom: 70
  }
};
}());
 