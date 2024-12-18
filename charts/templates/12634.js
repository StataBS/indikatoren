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
            .replace("Unternehmensverwaltung und -führung, Unternehmensberatung", "Unternehmensverwaltung und<br/>-führung, Unternehmensberatung")
        },
        style: { 
			textOverflow: 'none' // prevents ellipsis
		} 
    },
  },
  "yAxis": {
  	//"min": 0,
  	//"max": 0.5,
  //tickInterval: 10000,
    "labels": {
      "format": "{value:,.0f}" ,
        style: { 
			textOverflow: 'none' // prevents ellipsis
		} 
    }    
  },
  "series": [
  {"color": "#A8C3CA"},
  {"color": "#689199"}, 
  {"color": "#246370"}, 
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
  	marginRight: 50,
  	marginLeft: 200,
 // 	"height": 650,        
    "type": "column",
    "inverted": true
  }
}
}());

 