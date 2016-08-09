chartOptions['I.09.1.0004'] = { 
  "plotOptions": { 
    "series": { 
      "dataLabels": { 
        "style": { 
          "fontSize": 10 
        } 
      }, 
      "stacking": "percent" 
    } 
  }, 
  "yAxis": { 
    "title": { 
      "style": { 
        "color": "#000000", 
        "fontSize": null 
      }, 
      "text": null 
    }, 
    "labels": { 
      "format": "{value:,.0f}%", 
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
    "tickColor": "#FFFFFF" 
  }, 
  tooltip: { 
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.2f}%)<br/>', 
    shared: false, 
    "useHTML": true 
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
    "itemMarginBottom": 5, 
    "align": "right", 
    "useHTML": true, 
    "itemStyle": { 
      "fontWeight": "normal" 
    } 
 
  }, 
  "series": [ 
    { 
      "color": "#007A2F", 
      "index": 0 
    }, 
    { 
      "color": "#73B97C", 
      "index": 1 
    }, 
    { 
      "color": "#2F656B", 
      "index": 2 
    }, 
    { 
      "color": "#008AC3", 
      "index": 3 
    }, 
    { 
      "color": "#662673", 
      "index": 4 
    }, 
    { 
      "color": "#B00000", 
      "index": 5 
    } 
  ], 
  "title": { 
    "style": { 
      "fontSize": 14, 
      "fontWeight": "bold", 
      "fontFamily": "Arial", 
      "color": "#000000" 
    }, 
    "text": "Indikator 1.2.b: Wohnungsbestand nach Zimmerzahl und Wohnflächenkategorie 2014", 
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
    "renderTo": "container-I.09.1.0004",
    "borderColor": "#fbfbfb", 
    "backgroundColor": "#fbfbfb", 
    "width": 485, 
    "marginBottom": 95, 
    "marginTop": 75, 
    "style": { 
      "fontFamily": "Arial" 
    }, 
    "zoomType": "y", 
    "type": "column" 
  } 
}; 

