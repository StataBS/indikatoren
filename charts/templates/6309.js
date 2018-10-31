(function(){
    return {
  "xAxis": {
    "tickInterval": 1
  },
  "yAxis": {
    max: 60,
    tickInterval: 20,
  	"labels": {
  		"format": "{value:,.0f}"
  	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
  },
  "series": [
    {
      "color": "#008AC3",
      legendIndex: 0,
    }, /* duneklblau */
  	{
  	  "color": "#68AB2B",
  	  legendIndex: 2,
  	}, /* dunkelgrün */
    {
      "color": "#2B0099",
       dashStyle: 'ShortDash',
       legendIndex: 1,
    }, /* duneklblau */
  	{
  	  "color": "#007A2F",
      dashStyle: 'ShortDash',
      legendIndex: 3,
    }, /* dunkelgrün */
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    itemDistance: 10,
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
 