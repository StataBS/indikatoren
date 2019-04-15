(function(){
    return {
  "plotOptions": {
    "series": {
		"stacking": "percent",
		pointPadding: 0, 
		groupPadding: 0.1, 
		borderWidth: 0

    }
  },
  "xAxis": {
    "type": "category"    
  },  
  "yAxis": {
    "labels": {
      "format": "{value}%",
    },
    "reversedStacks": false
  },
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}:<br/><b>{point.y}</b> Personen (<b>{point.percentage:.1f}%</b> von Total {point.stackTotal: ,2f} Personen)<br/>',
    "shared": false
  },  
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "x": 40,
    //"y": 30,
    "align": "left",
    itemWidth: 130,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#008AC3", 
      "stack": "m",
      "legendIndex": 3
    },
    {
      "color": "#00bAf3", 
      "stack": "m",
      "legendIndex": 0
    },
    {
      "color": "#B00000", 
      "stack": "w",
      "legendIndex": 4
    },
    {
      "color": "#d00000", 
      "stack": "w",
      "legendIndex": 1
    },
    {
      "color": "#474747", 
      "stack": "t",
      "legendIndex": 5
    },   
    {
      "color": "#6F6F6F", 
      "stack": "t",
      "legendIndex": 2
    }
  ],
  "chart": {
    "marginBottom": 65,
    "marginTop": 100,
    "type": "column"
  }
	}
}());
