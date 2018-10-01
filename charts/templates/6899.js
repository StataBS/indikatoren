(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
  },
  "yAxis": {
    "min": 80, 
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
    itemDistance: 5, 
    labelFormatter: function(){
      return this.name.replace("und ", "und<br/>");
    },
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
      "marker":{
        "enabled": false,
        "symbol": "circle",
      } 
    }
  }
}
}());