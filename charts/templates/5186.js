(function(){
    return {
  "xAxis": {
    tickInterval: 1,
    labels: { 
      step: 2,
  		style: { 
  		  //	textOverflow: 'none' // prevents ellipsis
  	  }, 
    } 
  },
  "yAxis": {
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
  series: [
    {
      color: "#B00000",
    }, 
    {
      color: "#B00000",
      linkedTo: ":previous",
      marker: {
        enabled: true,
        radius: 2
      }    
    },
  	{
  	  color: "#4f81bd",
    }, 
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
 