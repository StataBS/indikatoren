chartOptions['I.09.5.0001'] = {
 
  "plotOptions": {
 
    "series": {
 
      "dataLabels": {
 
        "enabled": true,
 
        "allowOverlap": true,
 
          //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
 
          formatter: function() {
 
            var last  = this.series.data[this.series.data.length - 1];
 
            if (this.point.category === last.category  && this.point.y === last.y) {
 
              return this.series.name;
 
            }
 
            return "";
 
          }
 
      }
 
    }
 
  },
 
  "yAxis": {
 
    "max": 3000,
 
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
 
"exporting": {
	    "sourceWidth": null,
	    "scale": 5,
	    buttons: {
	      contextButton: {
	        menuItems: Highcharts.getOptions().exporting.buttons.contextButton.menuItems.slice(0, 8)
	      }
	    }
	  },  "credits": {
 
    "text": "Quelle: Mietpreiserhebung;<br/>Statistisches Amt des Kantons Basel-Stadt",
 
    "href": "http://www.statistik.bs.ch",
 
    "target": "_top",
 
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
 
      "index": 4,
 
      "color": "#DC440E"
 
    },
 
    {
 
      "marker": {
 
        "symbol": "circle",
 
        "enabled": true
 
      },
 
      "index": 3,
 
      "color": "#933F8D"
 
    },
 
    {
 
      "marker": {
 
        "symbol": "circle",
 
        "enabled": true
 
      },
 
      "index": 2,
 
      "color": "#68AB2B"
 
    },
 
    {
 
      "marker": {
 
        "symbol": "circle",
 
        "enabled": true
 
      },
 
      "index": 1,
 
      "color": "#689199"
 
    },
 
    {
 
      "marker": {
 
        "symbol": "circle",
 
        "enabled": true
 
      },
 
      "index": 0,
 
      "color": "#008AC3"
 
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
 
    "text": "Indikator 0.1.b-1: Mietpreisentwicklung nach Zimmerzahl",
 
    "align": "left"
 
  },
 
  "subtitle": {
 
    "style": {
 
      "fontSize": 12,
 
      "fontWeight": "normal",
 
      "fontFamily": "Arial",
 
      "color": "#000000"
 
    },
 
    "text": " ",
 
    "align": "left"
 
  },
 

 
  "chart": {
    "renderTo": "container-I.09.5.0001",
 
    "borderColor": "#fbfbfb",
 
    "backgroundColor": "#fbfbfb",
 
    "zoomType": "xy",
 
    "width": 485,
 
    "marginBottom": 75,
 
    "marginTop": 75,
 
    "style": {
 
      "fontFamily": "Arial"
 
    },
 
    "type": "line"
 
  }
 
};
 