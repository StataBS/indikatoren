(function(){
    return {
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
    "type": "category"    
  },
  "yAxis": {
    "labels": {
      "format": "{value}"
    }    
  },
  "series": [
    {
      "color": "#73BA7C"       
    },
    {
      "color": "#FABD24"
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
    "renderTo": 'container-I.01.1.0017',
    "marginBottom": 65,
    "marginTop": 75,
    "type": "column",
    "inverted": true
  }
	}
}());
