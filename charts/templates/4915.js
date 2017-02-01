(function(){
    return {
  "plotOptions": {
    "series": {
      "pointWidth": 10,
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
	"tickInterval": 5	
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
      "index": 1,
	  "color": "#DC440E",
      "legendIndex": 1  
    },
    {
      "index": 0,
	  "color": "#008AC3",
      "legendIndex": 0  
    }        
  ],
  "chart": {    
    	"marginBottom": 75,
    "marginTop": 75,
    "type": "column"
  }
	}
}());
