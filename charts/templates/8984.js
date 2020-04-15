(function(){
    return {
  "xAxis": {
      type: "category",
    //"tickInterval": 5,
  },
  "yAxis": [{
  	"min": 0,
    //"max": 2000000,
     //"tickInterval": 400000,
  	title: {
        text: null,
        "color": "#000000",
        "fontSize": null
    },
    "labels": {
      "format": "{value:,.0f}",
       style:{
       		color: "black",
       },
    },
  },
  {
  	"min": -0.75,
    max: 0.75,
    "tickInterval": 0.25,
    tickAmount: 7,
    "title": {
    	text: null,
        "style": {
        "color": "#000000",
        "fontSize": null
      },
	},
    "labels": {
      "formatter": function(){
        return Highcharts.numberFormat((this.value*100),0)+'%'; 
      },
       style:{
       		color: "black",
       },
    },
    "opposite": true,
    visible: false
  }
  ],
  "tooltip": {
    "shared": false, 
	  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
  },
  "series": [
    //{"color": "#68AB2B"}, 
  	{"color": "#662673"},
    {"color": "#008AC3"},
   /* {"color": "#C8C8C8", dashStyle: 'ShortDash', "yAxis":1,
    "tooltip": {
      "pointFormatter": function(){
        return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y*100),1) + '% </b><br/><b>' 
      },}, 
    }  	*/
    //{"color": "#B00000"}
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
        "radius": 3
      }
    }
  },   "chart": {
    "alignTicks": false
  }
};
}());
 