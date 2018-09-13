(function(){
    return {
    "yAxis": [{
    "labels": {
      "format": "{value:,.0f}",
      "style": {
        "color": "#000000"
      }
    },
    "min": 0,
    "max": undefined,
    "title": ""
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
      "format": "{value:,.0f}%",
      "style": {
        "color": "#000000"
      }
    },
    "min": 0,
    "max": undefined,
    "gridLineWidth": 0,
    "opposite": true
  }
  ],
  "xAxis": {
	"tickInterval": 1,
  },
  "series": [
    {
      "marker": {
        "symbol": "circle",
        "enabled": false
      },     
      "color": "#008AC3",
      "yAxis": 0,
	 "tooltip": {
		"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
	 },
    },
        {
      "marker": {
        "symbol": "circle",
        "enabled": false
      },     
      "color": "#DC440E",
      "yAxis": 0,
	 "tooltip": {
		"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
	 },
    },
            {
      "marker": {
        "symbol": "circle",
        "enabled": false
      },     
      "color": "#8A8A8A",
      "yAxis": 1,
	 "tooltip": {
		"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.2f}</b><br/>',
	 },
    }
  ],
  "legend": {
    "enabled": true,
    //"x": 25,
    //"y": 25,
    "itemWidth": 500,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
}
}());

