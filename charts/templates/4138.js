(function(){
    return {
  "plotOptions": {
    "series": {
      "stacking": null,
      "groupPadding": 0.05
    }, 
    line: {
        tooltip: {
          pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
          shared: false
        },
        shadow: true
    }
  },
  "yAxis": [
   {
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
    }
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
      "format": "{value:,.1f}%",
      "style": {
        "color": "#000000"
      }
    },
    "opposite": true
  },
  ],
  "xAxis": {
    "tickInterval": 1
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    shared: false
  },
  "legend": {
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 7,
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal", 
      "width": 85
    }
  },
  "series": [
    {
      "color": "#ffbb58",
      "index": 0,
      "visible": false
    },
    {
      "color": "#73b97c",
      "index": 1,
      "visible": false
    },
    {
      "color": "#007a2f",
      "index": 2,
      "visible": false
    },
    {
      "color": "#689199",
      "index": 3
    },
    {
      "color": "#923f8d",
      "index": 4,
      "visible": false
    },
    {
      "color": "#b00000",
      "index": 5,
      "type": "line",
      "yAxis": 1,
      "marker": {
				"enabled": false
			}
    },
    {
      "color": "#ffbb58",
      "index": 6,
      "type": "line",
      "yAxis": 1,
      "marker": {
				"enabled": false
			},
      "visible": false
    },
    {
      "color": "#73b97c",
      "index": 7,
      "type": "line",
      "yAxis": 1,
      "marker": {
				"enabled": false
			},
      "visible": false
    },
    {
      "color": "#007a2f",
      "index": 8,
      "type": "line",
      "yAxis": 1,
      "marker": {
				"enabled": false
			},
      "visible": false
    },
    {
      "color": "#689199",
      "index": 9,
      "type": "line",
      "yAxis": 1,
      "marker": {
				"enabled": false
			}
    },
    {
      "color": "#923f8d",
      "index": 10,
      "type": "line",
      "yAxis": 1,
      "marker": {
				"enabled": false
			},
      "visible": false
    }
  ],
  "chart": {
    "type": "column",
    "spacingBottom": 28    
  }
	}
}());
