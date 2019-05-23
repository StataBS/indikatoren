(function(){
    return {
   title: {
      useHTML: true
    },
    subtitle: {
      useHTML: true
    },
  "xAxis": {
    "type": "category",
    "labels": {
     // "rotation": -90 
    } 
  },
  "yAxis": {
	//"max": 100,
	labels:{
		style: { 
			textOverflow: 'none' // prevents ellipsis
		}
	}
  },
  "series": [
  {"color": "#83522E", "visible": true}, /* dunkelbraun*/
  //{"color": "#007A2F", "visible": true} /* ... */
  ],
  "legend": {
    "enabled": false,
  },
   /*tooltip: {
    "headerFormat": '{point.x}:<br/>',
    "pointFormat": '<b>{point.y}</b> m<sup>2</sup> pro Einwohner<br/>',
    //"shared": false,
    useHTML: true
  },*/
        "tooltip": {
            useHTML: true,
            "formatter": function(args){
                return '<span style="color:' + this.color + ';">\u25CF</span><span style="font-size: 0.85em;"> ' + this.key + ':</span><br/>' + 
                    '<b>' + Highcharts.numberFormat(this.y, 1) + '</b> m<sup>2</sup> pro Einwohner';
            },        
            shared: true
        },
  "chart": { 
  	marginRight: 18,
    "type": "scatter",
    "inverted": true,
    "spacingBottom": 35
  }
};
}());