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
        min: 2011,
        max: 2021
      },
      "yAxis": {
        min: -500,
        max: 2000,
        tickInterval: 500,
      "labels": {
        "format": "{value:,.0f}"
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
      [2020.4, -500],
      [2020.4, 2000],
      [2022, 2000],
      [2022, -500]
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
            "type": "column",
            width: 665
        },
    }
}());