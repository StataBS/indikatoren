(function(){
    return {
  "plotOptions": {
    "series": {    
    	pointPadding: 0, 
		//groupPadding: 0.1, 
		borderWidth: 0,
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      }
    },
    "column": {
        "colorByPoint": true
    }
  },
  "xAxis": {
	"type": "category"    
  },
  "yAxis": {
    "labels": {
        "format": "{value:,.0f}"
    }              
  },
  "series": [{
    name: 'Kanton'
  }    
  ],
  "colors": [
    "#474747" ,
    "#FF8028",
    "#FABD24",
    "#B375AB",
    "#990300"
  ],

  "legend": {
    "enabled": false,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	  //"y": 35,    
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "tooltip": {
        "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f} Fr.</b><br/>', 
    "shared": false
  },  
  "chart": {      
   // "renderTo": 'container-I.17.3.0003',
    "marginBottom": 75,
    "marginTop": 65,
    "type": "column",
  }
	}
}());
