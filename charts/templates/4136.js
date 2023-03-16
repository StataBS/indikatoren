(function(){
    return {
  "plotOptions": {
    "series": {
      "stacking": "normal"
    }
  },
  "yAxis": {
    "min": -100,
    //"max": 250,
    "tickInterval": 100, 
    "labels": {
      "format": "{value:,.0f}"
    }
  },
  "xAxis": {
    "tickInterval": 1
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    shared: true
  },
  "legend": {
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 7,
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal",
      "width": 111, 
      textOverflow: null
    }
  },
  "series": [
    {
      "color": "#007a2f"
    },
    {
      "color": "#2f656b"
    },    
    {
      "color": "#923f8d"
    },
    {
      "color": "#73b97c"
    },
    {
      "color": "#990300"
    },
    {
      "color": "#fabd24",
      "marker": {
        "enabled": false
      },
      "type": "line",
      tooltip: {
        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
        shared: false
      }
    }
  ],
  "chart": {
    "zoomType": "xy",
    "type": "column"
  }
	}
}());
