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
          x: -185,
          "formatter": function() {
            return this.value;//.replace("        ", "<br/>")
        },
        style: { 
			textOverflow: 'none' // prevents ellipsis
		} 
    },
  },
  "yAxis": {
  	//"min": 0,
  	//"max": 0.5,
  //	tickInterval: 3000,
    "labels": {
      "format": "{value:,.0f}" ,
        style: { 
			textOverflow: 'none' // prevents ellipsis
		} 
    }    
  },
  "series": [
  {"color": "#ECE1D0"},
  {"color": "#9E7C59"}, 
  {"color": "#3A2012"}, 
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
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    shared: false
  },  
  "chart": {  
  	marginLeft: 200,
    marginRight: 30,
  	"height": 650,        
    "type": "column",
    "inverted": true
  }
};
}());
