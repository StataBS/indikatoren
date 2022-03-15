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
	  "labels": {
		  "format": "{value}"
	  }
  },	
  "tooltip": {
    headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f} Jahre</b><br/>'
  },
 "series": [
  {"color": "#b00000", legendIndex: 0}, /*Schweiz*/
  {"color": "#661200", legendIndex: 2, dashStyle: 'ShortDash'}, /*Schweizer*/
  {"color": "#dc440e", legendIndex: 4, dashStyle: 'ShortDash'}, /*Schwezerinnen*/
  {"color": "#cd9c00", legendIndex: 1}, /*Ausland*/
  {"color": "#7f5f1a", legendIndex: 2, dashStyle: 'ShortDash'}, /*Ausländer*/
  {"color": "#ffda80", legendIndex: 5, dashStyle: 'ShortDash'}, /*Ausländerinnnen*/
  ],
   "legend": {
   	 symbolWidth: 30,
    "enabled": true,
    //"x": 45,
    //"y": 50,
    "itemWidth": 210,
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