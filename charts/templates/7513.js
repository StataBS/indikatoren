(function(){
    return {
  "xAxis": {
    "tickInterval": 1
  },
  "yAxis": {
    "min": undefined, 
  	"labels": {
  		"format": "{value:,.1f}"
  	}
  },	
  "tooltip": {
    "shared": false, 
	  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
  },
  "series": [
    {"color": "#FFBB58"},
    {"color": "#FF8028"},
    {"color": "#B00000"},
    {"color": "#923F8D", type: "scatter", marker:{"enabled": true,"radius": 3},
    "tooltip": {
      "shared": false, 
      "headerFormat": '<span style="font-size: 10px"> {point.key}</span><br/>',
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
   }, },
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
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
        "radius": 3
      }
    }
  }
};
}());
 