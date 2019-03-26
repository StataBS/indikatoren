(function(){
    return {
  "plotOptions": {
    "series": {
      "dataLabels": {
        "enabled": false
      }
    }
  },
  "yAxis": [{
    gridLineColor: '#B9CFD7', 
    gridLineWidth: 0.5,
    "title": {
      "style": {
        "color": "#000000",
        "fontSize": null
      },
      "text": null
    },
    "labels": {
      "format": "{value:,.0f}",
      "style": {
        "color": "#000000"
      }
    },
    "min": 0,
    tickAmount: 9,
  },
  {
    gridLineColor: '#B9CFD7', 
    gridLineWidth: 0.5,
    "title": {
      "style": {
        "color": "#000000",
        "fontSize": null
      },
      "text": null
    },
    "labels": {
      "format": "{value:,.0f}",
      "style": {
        "color": "#000000"
      }
    },
    "min": 0,
    "max": undefined,
    tickAmount: 9,
    tickInterval: 500,
    "opposite": true
  }
  ],
  "xAxis": {
    lineColor: '#B9CFD7', 
    lineWidth: 0.5,    
    "tickInterval": 4,
     "type": "category",
     labels:{
       x: 17,
     		"formatter": function() {
   			 return this.value.split("-").slice(0, -1);
     		},
     		}
     		},
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
  "series": [
    {
      "color": "#008AC3",
      "index": 0,
      "type": "column",
      "yAxis": 1
    },
    {"marker": {
        "symbol": "circle",
        "enabled": false
      },     
      "color": "#246370",
      "index": 1,
      "type": "line",
    },
    {"marker": {
        "symbol": "circle",
        "enabled": false
      },     
      "color": "#923F8D",
      "index": 2,
      "type": "line",
    }
  ],  "tooltip": {
    "shared": true, 
    valueDecimals: 0
  },
 // "chart": {
    "zoomType": "xy",
    "marginTop": 85,
    "type": "line"
  //}
	}
}());