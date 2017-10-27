(function(){
    return {
  "yAxis": [{
  	"min": 0,
    "max": 200000,
     "tickInterval": 50000,
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
  	"min": 90,
     max: 120,
    "tickInterval": 7.5,
    "title": {
        "style": {
        "color": "#000000",
        "fontSize": null
      },
      "text": null
    },
    title: {
        text: null
    },
    "labels": {
      "format": "{value:,.1f}",
       style:{
       		color: "black",
       },
    },
    "opposite": true
  }
  ],
  "xAxis": {
    "tickInterval": 2
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	"y": 40,
	"x": 45,
	"width": 300,
	"itemMarginBottom": 5,
    "itemWidth": 120, 
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#FFBB58", // Bevölkerung
      "index": 0,
      "type": "column",
      pointPadding: 0,
      borderWidth: 0,
      legendIndex: 1,
    	"tooltip": {
  		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
		   },
    },
    {
      "color": "#B00000", // Bevölkerung indexiert
      "index": 1,
      "type": "line",
      "yAxis": 1,
       "marker": {
        "enabled": true
      },
      legendIndex: 2,
	  "tooltip": {
  		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
	   },
    },
     {
      "color":  "#A8C3CA", // Beschäftigte
      "index": 0,
      "type": "column",
      pointPadding: 0,
      borderWidth: 0,
      //"pointWidth": "8",
      legendIndex: 3,
	  "tooltip": {
  			"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
      },

    },
    {
      "color":  "#246370", // Beschäftigte indexiert
      "index": 1,
      "type": "line",
      "yAxis": 1,
      "legendIndex": 3,
      "tooltip": {
  		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
	   },
      "marker": {
        "enabled": true
      },
    }
  ],  
   "tooltip": {
  	    //"shared": true
		   },
  "chart": {
    "marginBottom": 65,
    "alignTicks": false
  }
}
}());