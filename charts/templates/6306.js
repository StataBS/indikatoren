(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
    type: "category",
    labels: {
      rotation: 0
    },
  },
  "yAxis": {
    min: 90, 
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
    {"color": "#ff8028"}, 
	  {"color": "#dc440e"}, 
  	{"color": "#b00000"},
    {"color": "#661200"},
    {"color": "#672773"},
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
 