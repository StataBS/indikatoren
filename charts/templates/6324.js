(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
    labels: {
      step: 1,
      rotation: -45,
    },
  },
  "yAxis": {
    tickInterval: 500,
    max: 3000,
  	"labels": {
  		"format": "{value:,.0f}"
  	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
  "series": [
    {
      "marker": {
        "enabled": false
      },
      "color": "#8b2223"
    },
    {
      "marker": {
        "symbol": "circle",
        "enabled": true, 
        radius: 2
      },
      "color": "#8b2223"
    }
    
  ],
  "legend": {
    "enabled": false,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  chart: {
    spacingTop: 5,
  },
};
}());
 