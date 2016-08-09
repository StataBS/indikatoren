chartOptions['I.13.2.0003'] = {
 
  "plotOptions": {
 
    "series": {
 
      "dataLabels": {
 
        "enabled": true,
 
          //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
 
          formatter: function() {
 
            var last  = this.series.data[this.series.data.length - 1];
 
            var first  = this.series.data[0];
 
            if (this.point.y === first.y || this.point.y === last.y ) {
 
              return Highcharts.numberFormat(this.point.y, 0, ",", " ");
 
            }
 
            return "";
 
          }
 
      }
 
    }
 
  },
 
  "yAxis": {
 
    "min": 0,
 
    "max": 10000000,
 
    "tickInterval": 2000000,
 
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
 
    "text": "Quelle:  Sozialhilfestatistik des Statistischen Amtes Basel-Stadt",
 
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
 
    "enabled": false,
 
    "layout": "vertical",
 
    "verticalAlign": "middle",
 
    "align": "right"
 
  },
 
  "series": [
 
    {
 
      "marker": {
 
        "symbol": "circle",
 
        "enabled": true
 
      },
 
      "index": 0,
 
      "color": "#923f8d"
 
    }
 
  ],
 
  "tooltip": {
 
    "shared": false
 
  },
 
  "title": {
 
    "style": {
 
      "fontSize": 14,
 
      "fontWeight": "bold",
 
      "color": "#000000"
 
    },
 
    "text": "Indikator 4.1.b: Ausbezahlte Familienmietzinsbeiträge",
 
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
    "renderTo": "container-I.13.2.0003",
 
    "borderColor": "#fbfbfb",
 
    "backgroundColor": "#fbfbfb",
 
    "zoomType": "xy",
 
    "width": 485,
 
    "marginBottom": 65,
 
    "marginTop": 75,
 
    "style": {
 
      "fontFamily": "Arial"
 
    },
 
    "type": "line"
 
  }
 
};
