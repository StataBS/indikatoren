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
    "type": "category",  
    "labels": {
      rotation: 0
    }
  },  
  "yAxis": {
   // tickAmount: 10,
    "labels": {
      "format": "{value:,.0f}"
    },
    "reversedStacks": false
  },
  "tooltip": {
    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    footerFormat: 'Total: <b>{point.total:,.0f}</b>',
    "shared": true,
    valueDecimals: 0
  }, 
  "legend": {
    enabled: true,
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 5,
    "align": "right",
    itemWidth: 150,
    "itemStyle": {
      textOverflow: null,
      "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#661200",
      "legendIndex": 6     
    },
    {
      "color": "#B00000",
      "legendIndex": 5     
    },
    {
      "color": "#FF8028",
      "legendIndex": 4     
    },
    {
      "color": "#FFBB58",
      "legendIndex": 3     
    },
    {
      "color": "#662673",
      "legendIndex": 2     
    },
    {
      "color": "#B375AB",
      "legendIndex": 1
    },
    {
      "color": "#E7CEE2",
      "legendIndex": 0  
    },     
  ],
  "chart": {    
    "type": "column",
  }
	}
}());
