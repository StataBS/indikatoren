(function(){
    return {
  "plotOptions": {
    "series": {
      "stacking": "normal"
    }
  },
  "yAxis": {
    "min": -100,
    "max": 250,
    "tickInterval": 50, 
    "labels": {
      "format": "{value:,.0f}"
    }
  },
  "xAxis": {
    "tickInterval": 1
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.percentage:.2f}%)<br/>',
    shared: false
  },
  "legend": {
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 7,
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal",
      "width": 111
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
  ],
  "chart": {
    "marginBottom": 65,
    "marginTop": 75,
    "zoomType": "xy",
    "type": "column"
  }
	}
}());
