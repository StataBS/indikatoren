(function(){
    return {
   plotOptions: {
        series: {
            pointPadding: 0,
           // borderWidth: 0,
            groupPadding: 0.1
			//itemWidth: 10, 

        }
   },
  "xAxis": {
    "type": "category",
    "labels": {
      "rotation": 0,
      style: {
        textOverflow: 'none',
        'whiteSpace':'nowrap',
    },
    } 
  },
  "yAxis": {
      tickInterval: 1,
    "labels": {
      "format": "{value:,.0f}%"
    }    
  },
  "series": [
    { "color": "#474747" },
    { "color": "#FF8028" },
    { "color": "#FABD24" },
    //{ "color": "#923F8D" },
    //{ "color": "#990300" }
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
    headerFormat: '<span style="font-size: 10px"> {point.key} Jahre</span><br/>',
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
    "shared": false
  },
  "chart": {      
    "type": "column",
    spacingBottom: 50,
    //"inverted": true,
    //"spacingTop": 100
  }
}
}());