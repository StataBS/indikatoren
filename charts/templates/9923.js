(function(){
    return {
      xAxis: {
        tickPositioner: function () {
          var interval = 1,
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
    { "color": "#923F8D", "index": 0, "legendIndex": 0 }, /*grün dunkel2*/
      { "color": "#689199", "index": 1, "legendIndex": 2 }, /*grün mittel*/
    
  ],
  "legend": {
    "enabled": true,
    //"y": 50,
    "itemWidth": 100,
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
 