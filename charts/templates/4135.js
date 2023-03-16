(function(){
    return {
  plotOptions: {
        series: {
        	"stacking": "normal",
            pointPadding: 0,
            groupPadding: 0.5, // exaclty overlaps columns
            borderWidth: 0
        }
  },
  "yAxis": {
  	//"min": -200,
    "labels": {
      "format": "{value:,.0f}",
    },
    plotLines: [{
      color: '#B9CFD7',
      value: 0,
      width: 2
  }]
  },
  "xAxis": {
   "tickInterval": 1,
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	//"y": 40,
	//"x": 40,
	"itemMarginBottom": 5,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#b475ab",
      "index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 0
    },
    {
      "color": "#a8c4cb",
      "index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 1
    },
    {
      "color": "#fabd24",
      "index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 2
    },
	{
      "color": "#000000",
      "index": 1,
      "type": "line",
      "marker": {
        "enabled": false
      }, 

      //"yAxis": 1,
      legendIndex: 3,
      tooltip: {
      	"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
    }
    },
  ],  
  "tooltip": {
    "shared": true
  },
};
}());