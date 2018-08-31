(function(){
    return {
   "chart": {
    "type": "area",
   },
  plotOptions: {
        /*series: {
        	"stacking": "normal",
			pointPadding: 0,
            borderWidth: 0,
            pointWidth: 10, 

        }*/
         area: {
            stacking: 'normal',
            //lineColor: '#666666',
            lineWidth: 0,

        }
  },
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}",
    }, 
    tickAmount: 6
  },
  "xAxis": {
  	//"type": "category",
  	tickInterval: 1,
  	labels: {
  	    step: 1,
  	    rotation: -45,
  	},
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
        "fontWeight": "normal"
    }
  },
  "series": [
   {"color":"rgba(205, 156, 0, 0.75)", "index": 0, "marker": {"enabled": false}, legendIndex: 1}, 
   {"color":"rgba(176, 0, 0, 0.75)", "index": 1, "marker": {"enabled": false}, legendIndex: 0}, 
  ],  
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
   "shared": true
  },
};
}());