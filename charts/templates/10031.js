(function(){
    return {
  "xAxis": {tickInterval: 1
  },
  "yAxis": {
	"labels": {
		"format": "{value:,.0f}%"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>'
  },
  "series": [
    {color: "#083038"},
    {color: "#A8C3CA"},
    {color: "#B00000"},
    {color:"#FF8028"}
    
  ],
  "legend": {
    width: 300,
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
      }
    }
  }
}
}());