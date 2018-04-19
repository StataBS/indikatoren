(function(){
    return {
    title: {
      useHTML: true
    },
    subtitle: {
      useHTML: true
    },
  "xAxis": {
    //"tickInterval": 1
  },
  "yAxis": {
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
  },
  "series": [
    {"color": "#008AC3",
    "marker": {
        "enabled": false
      }    
    }, /* duneklblau */
    	{"color": "#68AB2B",
	visible:true,
    "marker": {
        "enabled": false
      }    
    }, /* dunkelgrün */
      {"color": "#2B0099",
    "marker": {
        "enabled": false
      },
       dashStyle: 'LongDash'
    }, /* duneklblau */
    	{"color": "#007A2F",
	visible:true,
    "marker": {
        "enabled": false
      },
      dashStyle: 'LongDash'
    }, /* dunkelgrün */
  ],
  "legend": {
  	symbolWidth: 30,
    "enabled": true,
    //"x": 25,
    //"y": 65,
    "itemWidth": 220,
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
 