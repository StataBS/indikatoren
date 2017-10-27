(function(){
    return {
"plotOptions": {
    "series": {
      pointPadding: 100,
      "pointWidth": 15,
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      },
      "stacking": "normal"
    }
  },
  "xAxis": {
    "type": "category",
    "tickInterval": 1
  },  
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}"
    },
   plotLines: [{
                    value: 0,
                    color: 'white',
                    width: 2,
                    zIndex: 10
                }]
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    itemWidth: 200,
    "verticalAlign": "top",
    "align": "left",
    "x": 50,
	"y": 20,    
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
  {"color": "#246370", "index": 1, legendIndex: 1}, /*rot */
  {"color": "#A8C3CA", "index": 2, legendIndex: 3}, /*blau */
  {"color": "#007A2F", "index": 3, legendIndex: 2}, /*hellrot */
  {"color": "#8AB77D", "index": 4, legendIndex: 4}, /*hellblau */
      {
      "color": "#000000",
      //"index": 1,
      "type": "line",
	   "marker": {
    	"enabled": false
      }, 
      legendIndex: 4,
    },
  ],
  "chart": {
    "renderTo": 'container-I.01.1.0016', 
    "marginBottom": 75,
    //"marginTop": 75,
    "type": "column",
    "inverted": false
  },
  "tooltip": {
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
  //"footerFormat": 'Total: <b>{point.total:,.0f}</b>',
   "shared": true,
  },
};
}());
