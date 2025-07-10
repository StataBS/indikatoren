(function(){
    return {
   title: {
      useHTML: true
    },
    subtitle: {
      useHTML: true
    },
   plotOptions: {
        series: {
          pointPadding: 0,
          borderWidth: 0,
        }
   },
  "xAxis": {
    "tickInterval": 2,
    "type": "category",
    "labels": {
      "rotation": 0 
    },
    tickPositioner: function () {
      var maxlabels = 12,
        ext = this.getExtremes(),
        i = Math.round(ext.max),
        interval = Math.round((i - ext.min)/maxlabels),
        pos = [i];
      while (i >= ext.min) pos.unshift(i = i - interval);
      return pos;
    } 
  },
  "yAxis": {
    min: 50,
    //max: 150,
    "labels": {
      "format": "{value:,.0f}"
    }    
  },
 "series": [
  {"color": "black"}, // Kanton BS
	{"color": "#DC440E"}, // KT Genf
	{"color": "#008AC3"}, // Stadt Zürich
  {"color": "#B00000",
    "dashStyle": "Dash"
  }, // Schweiz
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	  itemDistance: 5,
	  symbolPadding: 5,
	  padding: 0,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
      "shared": false
    },
  
}
}());