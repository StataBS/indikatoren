(function(){
    return {
  "xAxis": {
    "tickInterval": 1
  },
  "yAxis": {
    tickAmount: 5,
  	"labels": {
  		"format": "{value:,.3f}"
  	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
  "series": [
    {"color": "#CD9C00",}, /* gelb */
  	{
  	  "color": "#3C3C3C",
      dashStyle: 'LongDash'
    }, /* schwarz */
  ],
  "legend": {
  	symbolWidth: 30,
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
 