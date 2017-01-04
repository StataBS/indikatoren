var chartOptions = { 
  "plotOptions": { 
    "series": { 
      "stacking": "percent" 
    } 
  }, 
  "yAxis": { 
    "labels": { 
      "format": "{value:,.0f}%"
    } 
  }, 
  tooltip: { 
    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.percentage:.2f}%)<br/>', 
    shared: false, 
    "useHTML": true 
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
  "chart": { 
    "marginBottom": 95, 
    "marginTop": 75, 
    "zoomType": "xy", 
    "type": "column" 
  } 
}; 

