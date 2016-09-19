chartOptions['I.17.3.0003'] = {
  "plotOptions": {
    "series": {      
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      }
    },
  },
  "xAxis": {
    "tickInterval": 4,
	"type": "year"    
  },
  "yAxis": {
    "labels": {
      "format": "{value}"
    }    
  },
  "series": [
    {
      "color": "#FABD24"       
    },
    {
      "color": "#923F8D"
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
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>',
    shared: false
  },  
  "chart": {      
    "renderTo": 'container-I.17.3.0003',
    "marginBottom": 65,
    "marginTop": 75,
    "type": "column",
  }
};
