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
    "labels": {
      style: {
        fontSize: "10px"
      },
      rotation: 0
    },
    "type": "category"
  },
     "yAxis": [{
      gridLineColor: '#B9CFD7', 
      gridLineWidth: 0.5,
      lineColor: '#B9CFD7', 
      tickInterval: 2000,
      tickAmount: 6,
    "labels": {
      "format": "{value:,.0f}",
      "style": {
        fontSize:"10px",
        "color": "#000000"
      }
    },
    "min": 0,
    "max": undefined,
    "title": ""
  },
  {
    gridLineColor: '#B9CFD7', 
    gridLineWidth: 0.5,
    lineColor: '#B9CFD7', 
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
        fontSize: "10px",
        "color": "#000000"
      }
    },
    tickAmount: 6,
    "min": 0,
    "max": 1,
    "gridLineWidth": 0,
    "opposite": true
  }
  ],
  "series": [
     
  {"color": "#DC440E", "yAxis": 0, legendIndex: 0,
  	tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
	},  
  },
  {"color": "#008AC3", "yAxis": 0, legendIndex: 1,
  	tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
	},  
  }, 
  {"color": "#3C3C3C", "yAxis": 0, legendIndex: 3,
  	tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
	},  
  },
  {"color": "#6F6F6F", "yAxis": 1, legendIndex: 2, "type": "line", marker:{enabled: false},
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
	  //"y": 45,  
	  itemDistance: 0,
	  "itemWidth": 170,
	  "width": 340,
	  labelFormatter: function(){ 
	    return this.name.replace("Verhältnis Frauen/Männer (rechte Skala)","Verhältnis Frauen/Männer<br/>(rechte Skala)");
	  },
	  
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "chart": {      
    "type": "column",
    "inverted": false
  }
};
}());

 