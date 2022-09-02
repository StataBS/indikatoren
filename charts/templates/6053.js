(function(){
    return {
      "xAxis": {
        type: "category",
        tickInterval: 2,
        labels: {
          rotation: -45
        },
      },
  "yAxis": {
	"labels": {
		"formatter": function(){
        return Highcharts.numberFormat((this.value*100), 0)+'%'; 
      }, 
	}
  },	
  "tooltip": {
    "pointFormatter": function(){
      return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y*100),1) + '% </b><br/><b>' 
    },
  },
  "series": [
    {"color": "#3C3C3C",
    legendIndex: 2,
      "marker": {
        "enabled": false
      }    
    }, /* grün */
    	{"color": "#68AB2B",
	visible:true,
	legendIndex: 0,
      "marker": {
        "enabled": false
      }    
    }, /* blau */
    	{"color": "#008AC3",
	legendIndex: 1,
	visible:true,
      "marker": {
        "enabled": false
      }    
    }, /* scharz */
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
	  "connectNulls": true,
      "marker":{
        "enabled": false,
        "symbol": "circle",
      }
    }
  }
}
}());
 