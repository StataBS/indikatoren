var chartOptions = {
  "plotOptions": {
    "series": {
      "stacking": "normal",
      /*"pointWidth": 35,*/
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      }
    }
  },
  "xAxis": {
    "type": "category"    
  },  
  "yAxis": [
    {
      "title": {
          "style": {
              "color": "#000000",
              "fontSize": null
          },
          "text": null
      },
      "labels": {
          "style": {
          "color": "#000000"
          },
          "format": "{value}",
      },
      "reversedStacks": true
    },
    {
      "min": 0,
      "title": {
          "style": {
              "color": "#000000",
              "fontSize": null
          },
          "text": null
      },      
      "labels": {
        "format": "{value:,0f}",
        "style": {
          "color": "#000000"
        }              
      },
      "opposite": true
    }
  ],
  "tooltip": {    
    "shared": false,
    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.0f}</b><br/>'
  },  
  "legend": {
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "x": 43,
    "y": 35,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#FABD24",
      "type": "column", 
      "legendIndex": 1
    },
    {
      "color": "#008AC3",
      "type": "column", 
      "legendIndex": 0
    },
    {
      "color": "#9F7C5A",
      "type": "line",
      "yAxis": 1,
      "stacking": null, 
      "legendIndex": 4
    }    
  ],
  "chart": {
    "marginBottom": 65,
    "marginTop": 100,
    "type": "column"
  }
};
