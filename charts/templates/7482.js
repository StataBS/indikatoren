(function(){
    return {
  "plotOptions": {
    "series": {
      //"pointWidth": 25,
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
    tickAmount: 10,
    max: 4500,
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
    y: -15,
    "layout": "vertical",
    "verticalAlign": "middle",
    "align": "right",
    "itemMarginBottom": 1,
    "align": "right",
    symbolPadding: 0,
    margin: 1,
    width: 109,
    "itemStyle": {
      fontSize: "9px",
      textOverflow: "undefined",
      "fontWeight": "normal"
    }
  },
  "series": [
    
    {
      "color": "#FF8028",
      "legendIndex": 6     
    },
    {
      "color": "#2E1435",
      "legendIndex": 5     
    },
    {
      "color": "#662673",
      "legendIndex": 4
    },
    {
      "color": "#923F8D",
      "legendIndex": 3  
    },
    {
      "color": "#B375AB",
      "legendIndex": 2  
    },
    {
      "color": "#E7CEE2",
      "legendIndex": 1  
    },
    {
      "color": "#C9D6DB",
      "legendIndex": 0  
    }        
  ],
  "chart": {    
    "type": "column",
    spacingTop: 7
  }
	}
}());