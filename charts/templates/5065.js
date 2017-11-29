(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
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
 "series": [
 	{"color": "#000000",
 	 "index": 2,
 	 visible: true,
 	  "marker": {
        "enabled": true
    }
 	}, /*schwarz*/
	{"color": "#4a7ebb",
	visible: true,
	  index:3
	}, /*blau*/
	{"color": "#68AB2B",
	visible: true,
	  index:4
	}, /*orange*/
	{"color": "#9933ff",
	visible: true,
	  index:4
	}, /*violett*/
 	{"color": "#ff0000",
	visible: true,
 	 "index": 1,
 	  "marker": {
        "enabled": true
    }
 	}  /*rot*/
	  ],
  "legend": {
    "enabled": true,
    "x": 35,
    "y": 60,
    "itemWidth": 200,
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