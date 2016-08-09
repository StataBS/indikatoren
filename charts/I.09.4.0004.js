chartOptions["I.09.4.0004"] = {
  "plotOptions": {
    "series": {
      "stacking": null,
      "groupPadding": 0.05
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
      "format": "{value}%",
      "style": {
        "color": "#000000"
      }
    },
    "opposite": true
  },
  ],
  "xAxis": {
    "title": {
      "style": {
        "color": "#000000"
      }
    },
    "labels": {
      "style": {
        "color": "#000000"
      }
    },
    "tickColor": "#FFFFFF",
    "tickInterval": 1
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
    shared: false
  },
  "exporting": {
	    "sourceWidth": null,
	    "scale": 5,
	    buttons: {
	      contextButton: {
	        menuItems: Highcharts.getOptions().exporting.buttons.contextButton.menuItems.slice(0, 8)
	      }
	    }
	  },
  "credits": {
    "text": "Quelle: Leerstandserhebung;<br/>Statistisches Amt des Kantons Basel-Stadt",
    "enabled": true,
    "style": {
      "color": "#000000",
      "fontSize": 10
    },
    "position": {
      "align": "left",
      "verticalAlign": "bottom",
      x: 10,
      y: -17
    }
  },
  "legend": {
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 7,
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal"
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
			},
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
			},
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
"title": {
    "style": {
      "fontSize": 14,
      "fontWeight": "bold",
      "fontFamily": "Arial",
      "color": "#000000"
    },
    "text": "Indikator 1.2.f-1: Anzahl Leerwohnungen und Leerwohnungsquote nach Zimmerzahl",
    "align": "left"
  },
  "subtitle": {
    "style": {
      "fontSize": 12,
      "fontWeight": "normal",
      "fontFamily": "Arial",
      "color": "#000000"

    },
    "text": "",
    "align": "left"
  },

  "chart": {
    "renderTo": "container-I.09.4.0004",
    "borderColor": "#fbfbfb",
    "backgroundColor": "#fbfbfb",
    "width": 485,
    "marginBottom": 75,
    "marginTop": 75,
    "style": {
      "fontFamily": "Arial"
    },
    "zoomType": "xy",
    "type": "column"
  }
};
