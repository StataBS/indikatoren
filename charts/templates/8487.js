(function () {
  return {
    "plotOptions": {
      marginBottom: 35,
      "series": {
        pointPadding: 0,
        //groupPadding: 0.1, 
        borderWidth: 0,
        "dataLabels": {
          "style": {
            "fontSize": "10px"
          }
        }
      },
    },
    "xAxis": {
      "type": "category",
      labels: {
        rotation: 0
      }
    },
    "yAxis": {
      tickInterval: 50,
      "labels": {
        "format": "{value:,.0f}%"
      }
    },
    "series": [
      { "color": "#008AC3" },
      { "color": "#FABD24" },
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      //"y": 35,    
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>',
      "shared": false
    },
    "chart": {
      marginBottom: 35,
      "type": "column",
    }
  }
}());
