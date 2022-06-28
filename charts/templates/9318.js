(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
  },
  "yAxis": {
    tickInterval: 10,
    "min": 90, 
	  "labels": {
		  "format": "{value:,.0f}",
	  }
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [
  {"color":  "#FABD24"}, /**/
  {"color": "#A8C3CA"}, /**/
  {"color": "#662673"}, /**/
  {"color": "#67401E", legendIndex: 4}, /**/
  {"color": "#DC440E"}, /**/
  ],
   "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    width: 662,
    itemDistance: 5,
    "align": "left",
    "labelFormatter": function () {
      return this.name.replace('Bevölkerung', 'Wohnbevölkerung');
  },
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "plotOptions": {
    "line": {
      "marker":{
        "enabled": false,
        "symbol": "circle",
      } 
    }
  },
  chart:{
    width: 662, 
  	height: 208,
  }
}
}());