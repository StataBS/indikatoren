(function(){
    return {
      plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0
        }
    },
  "xAxis": {    "labels": {
         "formatter": function() {
            return this.value.replace("Erziehungsfragen oder -probleme", "Erziehungsfragen oder<br/>-probleme")}},
    "type": "category"    
  },
  "yAxis": {"labels": {

      "format": "{value}%"
    }    
  },
  "series": [
   {
      "color": "#FABD24",
      "index": 2

    },
       {
      "color": "#007A2F",
      "index": 1
    },
    {
      "color": "#73B97C",
      "index": 0
    }
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "x": 143,
		//"y": 65,    
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
    shared: false
  },  
  "chart": {      
    "type": "column",
    "inverted": true
  }
	}
}());
