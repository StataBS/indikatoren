(function(){
  return {
  "plotOptions": {
    "series": {
	   borderWidth: 0,
      "pointWidth": 30,
      "stacking": "normal"
    }
  },
  "xAxis": {
    "type": "category",
  //  "tickInterval": 1
  },  
  "yAxis": {
      "labels": {
    //  "format": "{value:,.0f}%",
    },
	"max": undefined
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    //"x": 20,
    //64"y": 35,
    //"width": 200,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
  {"color": "#689199"},
  {"color": "#ffbb58"},
  {"color": "#dc440e"}
  ],
  "chart": {
    //"renderTo": 'container-I.01.1.0016', 
    //"marginBottom": 75,
    //"marginTop": 75,
    "type": "column",
    "inverted": false
  },
  "tooltip": {
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
  "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
   "shared": true
  },
}
}());
