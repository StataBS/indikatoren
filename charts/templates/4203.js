var chartOptions = {
  "plotOptions": {
    "series": {
      "pointWidth": 15,
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      }
    },
    "column": {
        "colorByPoint": true
    }
  },
  "colors": [
    "#B00000",
    "#69929B",
    "#CD9C00",
    "#CD9C00",
    "#CD9C00",
    "#CD9C00",
    "#CD9C00",
    "#CD9C00",
    "#CD9C00",
    "#CD9C00",        
    "#CD9C00"
  ],  
  "xAxis": {
    "type": "category"    
  },  
  "legend": {
    "enabled": false
  },
  tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
    shared: false
  },  
  "chart": {    
    "type": "column",
    "inverted": true
  }
};
