(function(){
    return {
  "xAxis": {
  	type: 'category',
    labels: { 
      //rotation: 0,
      formatter: function(){
        //return the month 06 so that the label is centered over the year
        return (this.value.includes('-06') ? this.value.split("-")[0] : '');
      },
      step: 1,
      rotation: -45,
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
  {"color": "#FF8028"}, /**/
  {"color": "#B00000"}, /**/
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