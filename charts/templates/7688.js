(function(){
    return {
  "xAxis": {tickInterval: 1
  },
  "yAxis": {
	"labels": {
		formatter: function(){
            return Highcharts.numberFormat((this.value*100), 1)+'%';
        },
	}
  },	
  "tooltip": {
    //"shared": false, 
    "pointFormatter": function(){
    return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': ' + Highcharts.numberFormat((this.y*100),1) + '%'
},
   //   return '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: Highcharts.numberFormat((this.value*100), 1)+%</b><br/>'
  },
  "series": [
    {"color": "#cd9c00"
  }, 
  {"color": "#b375ab",
    visible:true,
  },  
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
 