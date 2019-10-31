(function(){
    return {
  "xAxis": {
    //"tickInterval": 1
  },
  "yAxis": {
    "min": 0, 
	"labels": {
        //"format": "{value:,.1f}%",
        "formatter": function(){
            return Highcharts.numberFormat((this.value*100),0); 
          },
	}
  },	
  tooltip: {
    "pointFormatter": function(){
        return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y*100),1) + ' </b><br/><b>' 
      },
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
  ],
  "legend": {
    "enabled": true,
    //"x": 50,
    //"y": 25,
    "itemWidth": 150,
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
 