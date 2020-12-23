(function(){
    return {
  "xAxis": {
    tickPositioner: function () {
      var interval = 2,
        ext = this.getExtremes(),
        i = ext.dataMax,
        pos = [i];
      while (i >= ext.dataMin) pos.unshift(i = i - interval);
      return pos;
    },
    "tickInterval": 1
  },
  "yAxis": {
    tickAmount: 5,
  	"labels": {
  		"format": "{value:,.3f}"
  	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
  "series": [
    {"color": "#CD9C00",}, /* gelb */
  	{
  	  "color": "#8A8A8A",
      dashStyle: 'ShortDash'
    }, /* grau */
  ],
  "legend": {
  	symbolWidth: 30,
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
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
 