(function(){
    return {
  "xAxis": {
    "tickInterval": 1
  },
  "yAxis": {
    min: 95, 
    //max: 125,
    tickInterval: 5,
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
  },
  "series": [
    {"color": "#b00000 ",}, /* rot */
	  {"color": "#672773",}, /* violett */
  	{"color": "#007a2f",},/* grün  */
    {"color": "#7F5F1A",},/* braun  */
    {"color": "#E6E600",},/* gelb  */
    /*{"color": "#008AC3",},*//* blau  */
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
 