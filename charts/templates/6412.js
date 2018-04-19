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
    //tickInterval: 10,
	  "labels": {
		  "format": "{value}"
	  }
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [
  {"color": "#FF8028"}, /**/
  {"color": "#B00000"}, /**/
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
      "marker":{
        "enabled": false,
        "symbol": "circle",
      } 
    }
  }
}
}());