(function(){
    return {
 "xAxis": {
    //"type": "category",
    labels:{
      rotation: 0
    },
    endOnTick: true,
    startOnTick: true,
    tickInterval: 1,
    min: 2012,
    max: 2022
  },
  "yAxis": {
    min: -250,
    max: 1000,
    tickInterval: 250, 
	"labels": {
    "format": "{value:,.0f}",   
    }
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [
	{
    color: '#7F5F1A',
    index: 0,
    type: "column",
    legendIndex: 0
  },
  {
    color: '#CD9C00',
    index: 1,
    type: "column",
    legendIndex: 1
  },
  {
    color: '#990300',
    index: 2,
    type: "column",
    legendIndex: 2
  },
  {
    color: '#008AC3',
    index: 3,
    type: "line",
    marker: {
      enabled: false
    },
    legendIndex: 3
  },
  {
    type: 'polygon',
    enableMouseTracking: false,
    showInLegend: false,
    data: [
      [2021.4, -250],
      [2021.4, 1000],
      [2023, 1000],
      [2023, -250]
    ],
    zIndex: -99,
    color: '#E7CEE2'
  }
	  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "plotOptions": {
            "series": {
                "stacking": null,
				pointPadding: 0, 
				groupPadding: 0.1, 
				borderWidth: 0

            }
        },
        "chart": {      
            "type": "column"
          }
    }
}());