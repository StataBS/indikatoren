(function(){
    return {
  plotOptions: {
        series: {
        	"stacking": "normal",
            pointPadding: 0,
            groupPadding: 0.5, // exaclty overlaps columns,
            borderWidth: 0
        }
  },
  "yAxis": {
    max: 100,
    tickInterval: 25,
    "labels": {
      "format": "{value:,.0f}%",
    }
  },
  "xAxis": {
    "type": "category",
    "labels": {
      "rotation": -90 
    } 
  },
 "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
   	"y": 55,
	 "itemMarginBottom": 5,
	  itemWidth: 140,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
      {
      "color": "#71A3B5", //blau
      "type": "column",
      "pointWidth": "15",
      "index": 5
    },
      {
      "color": "#B00000", // rot
      "type": "column",
      "pointWidth": "15",
      "index": 4
    },
      {
      "color": "#FF8028", //orange
      "type": "column",
      "pointWidth": "15",
      "index": 3
    },
     {
      "color": "#CD9C00", // braun
      "type": "column",
      "pointWidth": "15",
      "index": 2
    },
      {
      "color": "#923F8D", // violett
      "type": "column",
      "pointWidth": "15",
      "index": 1
    },        
      {
      "color": "#999999", //grau 
      "type": "column",
      "pointWidth": "15",
      "index": 0
    },

  ],  
  "tooltip": {
    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>',
    "shared": false
  },
  "chart": {
/*    
    "marginBottom": 65,
    "type": "line",
    "alignTicks": false
*/    
  }
};
}());
