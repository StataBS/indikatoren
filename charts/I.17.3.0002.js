chartOptions['I.17.3.0002'] = {
  "plotOptions": {
    "series": {      
      "dataLabels": {
        "style": {
          "fontSize": 10
        }
      }
    },
  },
  "xAxis": {
    "tickInterval": 1,
	"type": "Year"    
  },
  "yAxis": {
    "labels": {
     "tickInterval": 10,
	 "format": "{value}%"
    }    
  },
  "series": [
    {
      "legendIndex": 0,
	  "color": "#000000"       
    },
    {
      "legendIndex": 1,
	  "color": "#DC440E"
    }
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "x": 118,
		"y": 35,    
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
    shared: false
  },  
  "chart": {      
    "renderTo": 'container-I.17.3.0002',
    "marginBottom": 65,
    "marginTop": 75,
    "type": "column",
  }
};