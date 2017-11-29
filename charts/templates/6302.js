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
      tickAmount: 5,
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
        "format": "{value:,.1f}",
        "style": {
          "color": "#000000"
        }
      },
      "min": 0,
      "max": undefined,
      tickAmount: 5,
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
        "enabled": true
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
        "enabled": true
      },     
      "color": "#68AB2B",
      "yAxis": 0,
	 "tooltip": {
		"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
	 },
    },
            {
      "marker": {
        "symbol": "circle",
        "enabled": true
      },     
      "color": "#662673",
      "yAxis": 1,
	 "tooltip": {
		"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.2f}</b><br/>',
	 },
    }
  ],
  "legend": {
    "enabled": true,
    //"x": 25,
    //"y": 15,
    //"itemWidth": 500,
    margin: 2, 
    padding: 2,
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

