chartOptions["I.09.4.0005"] = {
  "plotOptions": {
    "series": {
      "stacking": null,
      "groupPadding": 0.1
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
    "gridLineWidth": 0,
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
    shared: true
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
    "text": "Quellen: Kantonale Gebäude- und Wohnungsstatistik, Leerstanderhebung; <br/> Statistisches Amt des Kantons Basel-Stadt",
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
      "color": "#0a3b19",
      "index": 2
    },
    {
      "color": "#b00000",
      "marker": {
        "enabled": false
      },
      "yAxis": 1,
      "index": 5,
      "type": "line",
    },
    {
      "color": "#68ab2b",
      "index": 1,
      "visible": false
    },
    {
      "color": "#923f8d",
      "marker": {
        "enabled": false
      },
      "yAxis": 1,
      "index": 4,
      "type": "line",
      "visible": false
    },
    {
      "color": "#d7e8d2",
      "index": 0,
      "visible": false
    },
    {
      "color": "#ff8028",
      "marker": {
        "enabled": false
      },
      "yAxis": 1,
      "index": 3,
      "type": "line",
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
    "text": "Indikator 1.2.f-2: Anzahl Leerwohnungen und Leerwohnungsquote nach Wohnflächenkategorie",
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
    "renderTo": "container-I.09.4.0005",
    "borderColor": "#fbfbfb",
    "backgroundColor": "#fbfbfb",
    "width": 485,
    "marginBottom": 95,
    "marginTop": 75,
    "style": {
      "fontFamily": "Arial"
    },
    "zoomType": "xy",
    "type": "column"
  }
};
