(function(){
    return {
"plotOptions": {

      area: {
        stacking: 'normal',
        //lineColor: '#666666',
        lineWidth: 0,

    
    }
  },
  xAxis: {
    tickPositioner: function () {
      var interval = 2,
        ext = this.getExtremes(),
        i = ext.dataMax,
        pos = [i];
      while (i >= ext.dataMin) pos.unshift(i = i - interval);
      return pos;
    }, 
    labels:{
	  	rotation: 0
	  }
  },
  "yAxis": {
     tickInterval: 20000,
     max: 100000,
    "labels": {
      //y: 10,
      "format": "{value:,.0f}",
    },
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
 "series": [
  {"color": "#246370", index: 9, "marker": {"enabled": false}, legendIndex: 0}, /**/
  {"color": "#923F8D", index: 8, "marker": {"enabled": false}, legendIndex: 1}, /**/
  {"color": "#7F5F1A", index: 7, "marker": {"enabled": false}, legendIndex: 2}, /**/
  {"color": "#CD9C00", index: 6, "marker": {"enabled": false}, legendIndex: 3}, /**/
  {"color": "#007A2F", index: 5, "marker": {"enabled": false}, legendIndex: 4}, /* */
  {"color": "#DC440E", index: 4, "marker": {"enabled": false}, legendIndex: 5}, /**/
],
  "chart": {
    "type": "column",
    "inverted": false,
    "type": "area",
  },
  "tooltip": {
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
   "shared": false
  },
}
}());
