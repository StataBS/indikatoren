(function(){
    return {
  "plotOptions": {
    "series": {
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      },
      "stacking": "normal"
    }
  },
  "xAxis": {
    "type": "category",  
    "labels": {
      rotation: -45
    }
  },  
  "yAxis": {
    tickAmount: 9,
    max: 8000,
    tickInterval: 1000,
    "labels": {
      "format": "{value:,.0f}"
    },
    "reversedStacks": false
  },
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    "shared": false
  },  
  "legend": {
    "layout": "vertical",
    "verticalAlign": "top",
    "itemMarginBottom": 1,
    "align": "right",
    symbolPadding: 0,
    margin: 1,
    width: 109,
    labelFormatter: function () {
      return this.name.replace("Sonstiger", "Sonst.")
      .replace("verschiedener", "versch.");
    },
    "itemStyle": {
      fontSize: "9px",
      textOverflow: "undefined",
      "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#661200",
      "legendIndex": 9     
    },
    {
      "color": "#B00000",
      "legendIndex": 8     
    },
    {
      "color": "#FF8028",
      "legendIndex": 7     
    },
    {
      "color": "#FFBB58",
      "legendIndex": 6     
    },
    {
      "color": "#662673",
      "legendIndex": 5     
    },
    {
      "color": "#B375AB",
      "legendIndex": 4
    },
    {
      "color": "#E7CEE2",
      "legendIndex": 3  
    },
    {
      "color": "#246370",
      "legendIndex": 2  
    },
    {
      "color": "#A8C3CA",
      "legendIndex": 1  
    },
    {
      "color": "#D3E2E4",
      "legendIndex": 0  
    }        
  ],
  "chart": {    
    "type": "column",
    spacingTop: 7
  }
	}
}());