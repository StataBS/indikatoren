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
  	//"min": 0,
  	//"max": 0.5,
    "labels": {
      "format": "{value}%" ,
        style: { 
			textOverflow: 'none' // prevents ellipsis
		},
    "formatter": function(){
        return Highcharts.numberFormat((this.value*100),1)+'%'; 
      }, 
    }    
  },
  "series": [
  {"color": "#C9D6DB"},
  {"color": "#71A3B5"}, 
  {"color": "#008AC3"}, 
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
  	marginBottom: 70,
  	"height": 650,        
    "type": "column",
    "inverted": true
  }
}
}());

 