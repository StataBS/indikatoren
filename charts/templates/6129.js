(function(){
  return {
    "yAxis": {
    	"min": 0,
      //"max": 200000,
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
    "xAxis": {
     "tickInterval": 1,
      "labels": {
          	step: 1,
              "rotation": -90,
        }  

    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
     // itemWidth: 140,
  	  "itemMarginBottom": 5,
      "itemStyle": {
        "fontWeight": "normal", 
        textOverflow: 'nowrap',
        whiteSpace: "nowrap"
      }
    },
    "series": [
      {
        "color": "#689199", // 
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
        "color": "#B00000", // 
        "index": 1,
        "type": "line",
         "marker": {
          "enabled": false
        },
        legendIndex: 2,
  	  "tooltip": {
    		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
  	   },
      },
      ],  
     "tooltip": {
    	    //"shared": true
  		   },
    "chart": {
      "alignTicks": false
    }
  };
}());
