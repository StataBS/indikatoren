(function(){
    return {
      xAxis: {
        tickPositioner: function () {
          var interval = 2,
            ext = this.getExtremes(),
            i = ext.dataMax,
            pos = [i];
          while (i >= ext.dataMin) pos.unshift(i = i - interval);
          return pos;
        }
      },
  "yAxis": {
    "min": 0, 
	"labels": {
		"format": "{value:,.0f}%"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>'
  },
  "chart": {      
    marginRight: 25
 },
  "series": [
    {"color": "#FABD24",
      "marker": {
        "enabled": false
      }    

    }, /*  */
	{"color": "#FFDA80",
      "marker": {
        "enabled": false
      }    
    }, /*  */
  	{"color": "#B375AB",
      "marker": {
        "enabled": false
      }    
    },/*   */
    {"color": "#E7CEE2",
      "marker": {
        "enabled": false
      }    
    },/*   */
    {"color": "#689199",
      "marker": {
        "enabled": false
      }    
    }
  ],
  "legend": {
    "enabled": true,
    //"y": 50,
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
	  "connectNulls": true,
      "marker":{
        "enabled": false,
        "symbol": "circle",
      }
    }
  }
}
}());
 