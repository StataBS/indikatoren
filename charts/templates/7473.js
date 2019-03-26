(function(){
    return {
   plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0,
		//	"pointWidth": 40,
 

        }
   },
  "xAxis": {
    "type": "category",
    "labels": {
      "rotation": 0 
    } 
  },
  "yAxis": {
    tickAmount: 8,
    tickInterval: 1000,
    "labels": {
      "format": "{value:,.0f}"
    }    
  },
  "series": [
  {"color": "#B375AB", "visible": true}, /*violett (hell)*/
  {"color": "#662673", "visible": true}, /*violett (dunkel)*/
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    //"x": 25,
	//"y": 55,    
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
   tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    "shared": false
  },
  "chart": {      
    "type": "column",
    "inverted": false,
    //"spacingTop": 100
  }
}
}());