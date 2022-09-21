(function(){
    return {
    "yAxis": [{
    "labels": {
      "format": "{value:,.f}",
      "style": {
        "color": "#000000"
      }
    },
    "min": -2.5,
    "max": 10,
    tickAmount: 6,
    "title": ""
  },
  {
    "title": {
      "style": {
        "color": "#000000",
        "fontSize": null
      },
      "text": null
    },
    "labels": {
      "format": "{value:,.f}",
      "style": {
        "color": "#000000"
      }
    },
    "min": -6000,
    "max": 24000,
    tickAmount: 6,
    "gridLineWidth": 0,
    "opposite": true
  }
  ],
  "xAxis": {
	"tickInterval": 2,
  },
  "series": [
    {
      "marker": {
        "symbol": "circle",
        "enabled": false
      },     
      "color": "#008AC3",
        "tooltip": {
				"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
		},
    },
        {
      "marker": {
        "symbol": "circle",
        "enabled": false
      },     
      "color": "#68AB2B",
        "tooltip": {
				"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
		},
      "yAxis": 1
    }
  ],

  "legend": {
    "enabled": true,
    //"x": 25,
    //"y": 55,
    //"itemWidth": 150,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
}
}());

