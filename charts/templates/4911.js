(function(){
    return {
  "plotOptions": {
    "series": {  
       pointPadding: 0,
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      }
    },
  },
  "xAxis": {
    "type": "Year",
    tickInterval: 2,
  },
  "yAxis": {
    "labels": {
      "format": "{value}%"
    }    
  },
  "series": [
    {
      "color": "rgb(111,111,111)"       
    },
    {
      "color": "rgb(176,0,0)"
    }
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
    shared: false
  },  
  "chart": {      
    "renderTo": 'container-I.05.1.0001',
    "type": "column",
    "marginBottom": 65,
  }
	}
}());
