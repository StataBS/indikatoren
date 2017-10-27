(function(){
    return {
  "plotOptions": {
    "series": {
      "pointWidth": 10,
      "stacking": "normal"
    }
  },
  "xAxis": {
    "type": "category",
	"tickInterval": 2	
  },  
"yAxis": [{
  	title: {
        text: null
    },
    "labels": {
       "style": {
    	fontSize:10,
       "color": "#000000"
        },
       "format": "{value:,.0f}"
    },
    "min": 0,  },
  {
    title: {
        text: null
    },
    "labels": {
       "style": {
    	fontSize:10,
       "color": "#000000"
        },
      "format": "{value:,.1f}"
    },
    "min": 0,
    "opposite": true
  }
  ],
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    //"footerFormat": 'Total:: <b>{point.total:,.0f}</b>',
    "shared": false
  },  
  "series": [
        {
      "index": 2,
	  "color": "#990300",
      "legendIndex": 1,
      "type": "column",
       "tooltip": {
    		"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
       }
    },// Rot
    {
      "index": 1,
	  "color": "#71A3B5",
      "legendIndex": 2,
      "type": "column",
      "tooltip": {
    		"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
       }
    },// Blau
    {
      "color": "#000000",
      "type": "line",
      "legendIndex": 3,
      "yAxis": 1,
      "marker": {
        "enabled": false
    },
    "tooltip": {
    		"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.2f}</b><br/>',
     }
    }
  ],
   /*"tooltip": {
    //"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    "footerFormat": 'Total:: <b>{point.total:,.0f}</b>',
    "shared": false
  },  */
  "legend": {
    "enabled": true,
    "x": 45,
    //"y": 35,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
     "fontWeight": "normal"
    }
  },
  "chart": {    
    "type": "column",
    	"width":665,
  }
}
}());
