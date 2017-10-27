(function(){
    return {
  "chart": { 
  	"width":665,
  	spacing: [15,3,8,3],
  },
  plotOptions: {
        series: {
        	"stacking": "normal",
            pointPadding: 0,
            groupPadding: 0.5, // exaclty overlaps columns
            borderWidth: 0
        }
  },
  "yAxis": {
  	"min": -20000,
  	"tickInterval": 10000,
    "labels": {
      "format": "{value:,.0f}",
    }
  },
  "xAxis": {
   "tickInterval": 1
  },
  /*"legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "width": 50,
  	"x": 40,
	"y": 40,
	"itemMarginBottom": 5,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },*/
  "legend": {
  	enabled:true,
  	"layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 5,
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#246370", // dunkelblau - Zuzug aus der Schweiz
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 0
    },
    {
      "color": "#007A2F", //dunkelgrün - Wegzug in die Schweiz
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 1
    },
    {
      "color": "#A8C3CA", //hellblau - Zuzug aus Ausland
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 2
    },
    {
      "color":  "#8AB77D", //hellgrün - Wegzug ins Ausland
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 4
    },
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
  "tooltip": {
    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    "shared": true
  }
};
}());
