chartOptions['I.50.2.0002'] = {
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
      "format": "{value}%"
    }    
  },
  "series": [
    {
      "color": "#A8C4CB",
      "index": 1
    },
    {
      "color": "#256370",
      "index": 0
    }
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "x": 153,
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
    "renderTo": 'container-I.01.1.0017',
    "marginBottom": 65,
    "marginTop": 75,
    "marginLeft": 190,
    "type": "column",
    "inverted": true
  }
};
