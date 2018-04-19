(function(){
    return {
  plotOptions: {
        series: {
        	"stacking": "percent",
            pointPadding: 0,
            groupPadding: 0.5, // exaclty overlaps columns,
            borderWidth: 0
        }
  },
  "yAxis": {
    reversedStacks: false,
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
    itemDistance: 10, 
    padding: 0,
	  "itemMarginBottom": 5,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
      {
      "color": "#71A3B5", //blau
      "type": "column",
      "pointWidth": "15",
    },
      {
      "color": "#B00000", // rot
      "type": "column",
      "pointWidth": "15",
    },
      {
      "color": "#FF8028", //orange
      "type": "column",
      "pointWidth": "15",
    },
     {
      "color": "#CD9C00", // braun
      "type": "column",
      "pointWidth": "15",
    },
      {
      "color": "#923F8D", // violett
      "type": "column",
      "pointWidth": "15",
    },        
      {
      "color": "#999999", //grau 
      "type": "column",
      "pointWidth": "15",
    },

  ],  
  "tooltip": {
    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} ({point.percentage:,.1f}%)</b><br/>',
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
