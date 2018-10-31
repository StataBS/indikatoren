(function(){
    return {
  "xAxis": {
    tickInterval: 1
  },
  "yAxis": {
    tickAmount: 6,
    //max: 20,
  	"labels": {
  		"format": "{value:,.0f}%"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'
  },
  "series": [
    {"color": "#008AC3",}, /* dunkelrot */
  	{"color": "#007A2F",}, /* dunkelgrün */
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
 