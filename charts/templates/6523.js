(function(){
    return {
   plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0,
        }
   },
 "data":{
  	"switchRowsAndColumns": true
  },

  "xAxis": {
    "type": "category"
  },
     "yAxis": [{
    "labels": {
      "format": "{value:,.0f}",
      "style": {
        "color": "#000000"
      }
    },
    "min": 0,
    "max": undefined,
    "title": ""
  },
  {
    "title": {
      "style": {
        "color": "#000000",
        "fontSize": null
      },
      "text": null
    },
    "labels": {
      "format": "{value:,.1f}",
      "style": {
        "color": "#000000"
      }
    },
    "min": 0,
    "max": undefined,
    "gridLineWidth": 0,
    "opposite": true
  }
  ],
  "series": [
  {"color": "#b00000", "yAxis": 0,
  	tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
	},  
  },
  {"color": "#6F6F6F", "yAxis": 0,
  	tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
	},  
  }, 
  {"color": "#008AC3", "yAxis": 0,
  	tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
	},  
  },  
  {"color": "#000000", "yAxis": 1, "type": "line", marker:{enabled: false},
  	tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.2f}</b><br/>',
	},  
  },   
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    //"x": 25,
	"y": 45,  
	"itemWidth": 300,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "chart": {      
    "type": "column",
    "inverted": false
  }
}
}());

 