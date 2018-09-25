(function(){
  return {
    title: {
      useHTML: true
    },
    subtitle: {
      useHTML: true
    },
    "yAxis": {
  	  "labels": {
    		"format": "{value:,.0f}"
    	}
    },	
    "tooltip": {
      useHTML: true,
      "shared": false, 
  	  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
    },
    "series": [
      {
        "color": "#2B0099",
        "marker": {
          "enabled": false
        }    
      }, /* duneklblau */
      {
        "color": "#007A2F",
  	    visible:true,
        "marker": {
          "enabled": false
        }    
      }, /* dunkelgrün */
      {
        "color": "#008AC3",
        "marker": {
          "enabled": false
        },
        dashStyle: 'ShortDash'
      }, /* duneklblau */
      {
        "color": "#68AB2B",
  	    visible:true,
        "marker": {
          "enabled": false
        },
        dashStyle: 'ShortDash'
      }, /* dunkelgrün */
    ],
    "legend": {
      useHTML: true,
    	//symbolWidth: 30,
      "enabled": true,
      //"x": 25,
      //"y": 65,
      //"itemWidth": 220,
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
    }, 
    exporting: {
      allowHTML: true,
    },
  };
}());
 