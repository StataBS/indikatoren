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
      offset: -5,
      gridLineColor: '#B9CFD7', 
      gridLineWidth: 0.5,
      lineColor: '#B9CFD7', 
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
        "color": "#000000",
        fontSize: "10px"
      }
    },
    "min": 0,
    tickAmount: 7,
  },
  {
      offset: -5,
      gridLineColor: '#B9CFD7', 
      gridLineWidth: 0.5,
      lineColor: '#B9CFD7', 
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
        "color": "#000000",
        fontSize: "10px"
      }
    },
    "min": 0,
    "max": undefined,
    tickAmount: 7,
    "opposite": true
  }
  ],
  "xAxis": {
    "tickInterval": 4,
     "type": "category",
     labels:{
       x: 10.5,
       rotation: 0,
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
      "color": "#73b97c",
      "index": 0,
      "type": "column",
      "yAxis": 1
    },
    {"marker": {
        "symbol": "circle",
        "enabled": false
      },     
      "color": "#0A3B19",
      "index": 1,
      "type": "line",
    },
    {"marker": {
        "symbol": "circle",
        "enabled": false
      },     
      "color": "#008AC3",
      "index": 2,
      "type": "line",
    }
  ],  "tooltip": {
    "shared": true, 
    valueDecimals: 1
  },
 // "chart": {
    "zoomType": "xy",
    "marginTop": 85,
    "type": "line"
  //}
	}
}());