(function(){
    return {
  "plotOptions": {
    "series": {
      "borderWidth": 0,
      "pointWidth": 30,
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      },
      "stacking": "false"
    }
  },
  "xAxis": {
    "type": "category",
  },  
"yAxis": [{
  	title: {
        text: null
    },
    "labels": {
      "format": "{value:,.0f}",
       "style": {
          color: "black", 
          fontSize: '10px',
        },
    },
    "min": 0,  
    tickAmount: 5
  },
  {
    title: {
        text: null
    },
    "labels": {
      "format": "{value:,.1f}",
       "style": {
         color: "black",
         fontSize: '10px',
        },
    },
    "min": 0,
    tickAmount: 5,
    "opposite": true
  }
  ],
  "series": [
    {
	  "index": 1,
	  "color": "#71A3B5",
      //"legendIndex": 2,
      "type": "column",
      "tooltip": {
    		"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
       }
    }, // Blau
    {
      "color": "#000000",
      "type": "line",
      //"legendIndex": 3,
      "yAxis": 1,
      "marker": {
        "enabled": false
    },
    "tooltip": {
    		"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.2f}</b><br/>',
     }
    }
  ],
   "tooltip": {
    //"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    "shared": false, 
    useHTML: true
  }, 
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
     "fontWeight": "normal"
    }
  },
  "chart": {    
    //"marginBottom": 75,
    //"marginTop": 75,
    "type": "column"
  }
};
}());
