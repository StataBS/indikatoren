(function(){
    return {
  "plotOptions": {

    "series": {
      //"pointWidth": 50,
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
  "yAxis":
  {        tickAmount: 8,
        "labels": {
      "format": "{value:,.0f}"
    },    
    "reversedStacks": false
  },
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>', "footerFormat": 'Total: <b>{point.total:,.1f}</b>',
    "shared": false
  },  
"legend": { 
 	x: 0,
     //y: 45,
    "enabled": true,
    "layout": "horizontal",
   "itemWidth": 200,
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#923F8D",
      "legendIndex": 1
    },
    {
      "color": "#FABD24",
      "legendIndex": 2
    },
    {
      "color": "#D7E8D2",
      "legendIndex": 3
    },
    {
      "color": "#0A3B19",
      "legendIndex": 4
    },
    {
      "color": "#73B97C",
      "legendIndex": 5
    },
    {
      "color": "#E7CEE2",
      "legendIndex": 6
    },
    {
      "color": "#FFBB58",
      "legendIndex": 7
    },
    {
      "color": "#DC440E",
      "legendIndex": 8
    },
    {
      "color": "#083038",
      "legendIndex": 9
    },
    {
      "color": "#689199",
      "legendIndex": 10
    }  ,
        {
      "color": "#B00000",
      "legendIndex": 11
    },
    {
      "color": "#9E7C59",
      "legendIndex": 12
    },
    {
      "color": "#C4AB91",
      "legendIndex": 13
    }  
  ],
  "chart": { 
    height: 600,
    "marginBottom": 60,
    "marginTop": 180,
    "type": "column"
  }
	}
}());
