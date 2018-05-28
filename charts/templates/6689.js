(function(){
    return {
  "xAxis": {
  	type: 'category',
    "tickInterval": 12,
    labels: { 
      rotation: -45,
      formatter: function(){
        return this.value.split(" ")[0];
      },
  		style: { 
  		//textOverflow: 'none' 
  		} 
  	} 
  },
  "yAxis": {
    "min": 0, 
    tickInterval: 25,
	  "labels": {
		  "format": "{value}"
	  }
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [
  {"color": "#FABD24"}, /**/
  {"color": "#7F5F1A"}, /**/
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
      "marker":{
        "enabled": false,
        "symbol": "circle",
      } 
    }
  }
};
}());