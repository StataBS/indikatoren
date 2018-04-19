(function(){
    return {
	plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0
        }
    },
  "xAxis": {
    "type": "category",
    "labels": {
		  align: "left",
          x: -180,
          "formatter": function() {
            return this.value.replace("/", "<br/>")
        },
        style: { 
			textOverflow: 'none' // prevents ellipsis
		} 
    },
  },
  "yAxis": {
  	tickInterval: 0.02,
    "labels": {
     rotation: 0,
    "formatter": function(){
        return Highcharts.numberFormat((this.value*100),0)+'%'; 
      }, 
     "format": "{value}*100%" ,
     style: { 
			textOverflow: 'none' // prevents ellipsis
		} 
    }    
  },
  "series": [
  {"color": "#FFBB58"},
  {"color": "#FF8028"}, 
  {"color": "#DC440E"}, 
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    },
  },
  tooltip: {
  "pointFormatter": function(){
      return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y*100),1) + '% </b><br/><b>' 
    },
  },  
  "chart": {  
  	marginLeft: 200,
  	marginRight: 18,
  	"height": 650,        
    "type": "column",
    "inverted": true
  }
}
}());

 