(function(){
    return {
  "xAxis": {
    tickInterval: 10,
  },
  "yAxis": {
    "min": undefined, 
    tickInterval: 5,
    //tickAmount: 5,
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  tooltip: {
    "pointFormatter": function(){
        return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + ' </b><br/><b>' 
    }  
      },
  "series": [
  	   {"color": "#007A2F",
      "marker": {
        "enabled": false
      }    
    }, /* black */
    {"color": "#923F8D",
      "marker": {
        "enabled": false
      }    
    }, /* violett */
	{"color": "#DC440E",
      "marker": {
        "enabled": false
      }    
    }, /* rot */
    {"color": "#FFDA80",
      "marker": {
        "enabled": false
      }    
    },/* gelb  */
    {"color": "#007A2F",
    dashStyle: 'Dash',
    "marker": {
      "enabled": false
    }    
  }, /* black */
  {"color": "#923F8D",
  dashStyle: 'Dash',
    "marker": {
      "enabled": false
    }    
  }, /* violett */
  {"color": "#DC440E",
  dashStyle: 'Dash',
    "marker": {
      "enabled": false
    }    
  }, /* rot */
  {"color": "#FFDA80",
  dashStyle: 'Dash',
    "marker": {
      "enabled": false
    }    
  },/* gelb  */
  ],
  "legend": {
    "enabled": true,
    //"x": 50,
    //"y": 25,
    width: 300,
    "itemWidth": 140,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 0,
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
  chart:{
    type: 'line'
  }
}
}());
 