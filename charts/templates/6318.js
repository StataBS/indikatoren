(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
    labels: {
      step: 1,
      rotation: -45
    }
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
    {"color": "#B00000",}, /* dunkelrot */
  	{"color": "#007A2F",}, /* dunkelgrün */
  	{"color": "#4f81bd",}, /* dunkelblau */
  	{"color": "#662673",}, /* dunkelviolett */
  	{"color": "#FABD24",}, /* dunkelviolett */
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
 