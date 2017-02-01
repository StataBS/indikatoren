(function(){
    return {
  "plotOptions": {
    "series": {
      "pointWidth": 25,
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      },
      "stacking": "normal"
    }
  },
  "xAxis": {
    "type": "category"    
  },  
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}"
    }
  },
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    "shared": false
  },  
  "legend": {
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 5,
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#68AB2B",
      "legendIndex": 0     
    },
    {
      "color": "#ECE1D0",
      "legendIndex": 1
    },
	  {
      "color": "#9E7C59",
      "legendIndex": 2     
    },
    {
      "color": "#B6CFD7",
      "legendIndex": 3
    },
    {
      "color": "#008AC3",
      "legendIndex": 4  
    },
    {
      "color": "#923F8D",
      "legendIndex": 5  
    },
    {
      "color": "#FFBB58",
      "legendIndex": 6  
    },
    {
      "color": "#DC440E",
      "legendIndex": 7  
    }        
  ],
  "chart": {    
    "marginBottom": 75,
    "marginTop": 75,
    "type": "column"
  }
	}
}());
