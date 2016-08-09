 chartOptions['I.09.1.0005'] = {
  "plotOptions": {
    "series": {
      "stacking": "normal"
    }
  },
  "yAxis": {
    "min": -100,
    "max": 250,
    "tickInterval": 50
, 
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
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.2f}%)<br/>',
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
    "text": "Quelle: Kantonale Gebäude- und Wohnungsstatistik;<br/>Statistisches Amt des Kantons Basel-Stadt",
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
      "color": "#fabd24",
      "marker": {
        "enabled": false
      },
      "index": 5,
      "type": "line"
    },
    {
      "color": "#007a2f",
      "index": 0
    },
    {
      "color": "#73b97c",
      "index": 3
    },
    {
      "color": "#2f656b",
      "index": 1
    },
    {
      "color": "#990300",
      "index": 4
    },
    {
      "color": "#923f8d",
      "index": 2
    }
  ],    "title": {
    "style": {
      "fontSize": 14,
      "fontWeight": "bold",
      "fontFamily": "Arial",
      "color": "#000000"
    },
    "text": "Indikator 1.2.c-2: Umbausaldo nach Art des Umbaus",
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
    "renderTo": "container-I.09.1.0005",
    "borderColor": "#fbfbfb",
    "backgroundColor": "#fbfbfb",
    "width": 485,
    "marginBottom": 65,
    "marginTop": 75,
    "style": {
      "fontFamily": "Arial"
    },
    "zoomType": "xy",
    "type": "column"
  }
};
