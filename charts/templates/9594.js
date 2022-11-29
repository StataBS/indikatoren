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
  {"color": "#68AB2B", "yAxis": 0,
  	tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
	},  
},
  {"color": "#73B97C", "yAxis": 0, visible: false,
  tooltip: {
  pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
}, 
  },
  {"color": "#923F8D", "yAxis": 0,
  	tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
	},  
  }, 
  {"color": "#B375AB", "yAxis": 0, visible: false,
  tooltip: {
  pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
},  
},
  {"color": "#008AC3", "yAxis": 0,
  	tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
	},  
  }, 
  {"color": "#71A3B5", "yAxis": 0, visible: false,
  tooltip: {
  pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
},  
},  
  {"color": "#cd9c00", "yAxis": 0,
   tooltip: {
   pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
},  
}, 
{"color": "#FABD24", "yAxis": 0, visible: false,
tooltip: {
pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
},  
},
  {"color": "#000000", "yAxis": 0, "type": "line", marker:{enabled: false},
  	tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
	},  
  }, 
  {"color": "#8A8A8A", "yAxis": 0, "type": "line", marker:{enabled: false}, visible: false,
  tooltip: {
  pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
},  
},  
  {"color": "#000000", "yAxis": 0, "type": "line", dashStyle: 'Dash', marker:{enabled: false},
  tooltip: {
  pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
},  
},  
{"color": "#8A8A8A", "yAxis": 0, "type": "line", dashStyle: 'Dash', marker:{enabled: false}, visible: false,
tooltip: {
pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
},  
},  
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    //"x": 25,
	  //"y": 45,  
	  //"itemWidth": 190,
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

 