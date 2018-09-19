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
     tickAmount: 5,
    "labels": {
      "format": "{value:,.0f}",
      "style": {
        "color": "#000000",
        "fontSize": "10px",
      }
    },
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
        "color": "#000000",
        "fontSize": "10px",
      }
    },
	"min": 0,
     //max: 600,
     tickAmount: 5,
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
  	padding: 0,
  	alignColumns: false, 
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
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