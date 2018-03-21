(function(){
    return {
   plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0,
			itemWidth: 10, 

        }
   },
  "xAxis": {
    "type": "category",
    "labels": {
      "rotation": -45 
    } 
  },
     "yAxis": [{
    "labels": {
      "format": "{value:,.0f}",
      "style": {
        "color": "#000000"
      }
    },
    "min": 0,
    //"max": 350000,
    tickAmount: 7,
    "title": ""
  },
  {
    "title": {
      "style": {
        "color": "#000000",
        "fontSize": null
      },
      "text": null
    },
    "labels": {
      "format": "{value:,.0f}",
      "style": {
        "color": "#000000"
      }
    },
    "min": 0,
    //"max": 1000,
    //tickInterval: 150,
    tickAmount: 7,
    "gridLineWidth": 0,
    "opposite": true
  }
  ],
  "series": [
  {"color": "#246370", "visible": true, "yAxis": 0}, /* */
  {"color": "#A8C3CA", "visible": true, "yAxis": 0}, /*  */
  {
  "color": "#b00000",
  "type": "scatter",
  "yAxis": 1,
  tooltip: {
    headerFormat: '<span style="font-size: 10px"> {point.key}</span><br/>',
    pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>'    
  }
  },
  ],
  "legend": {
  	//itemWidth: 300,
  	padding: 0,
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    //"x": 25,
	  "y": 60,    
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
    "inverted": false
  }
}
}());