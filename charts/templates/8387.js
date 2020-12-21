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
            "type": "category", 
            "labels": {
                x:-5,
                formatter: undefined,
                style: {
                    fontSize: "10px",
                    color: "#000000",
                    width: 1,
                    whiteSpace: 'nowrap',
                    textOverflow: "none"}}
       
  },
  "yAxis":
  {"tickInterval": 20, 
    "labels": {
    "format": "{value}%",
      y:10,   
    }  
      
  },
  "series": [
   {
      "color": "#FABD24",
      "index": 0

    },
       {
      "color": "#007A2F",
      "index": 1
    },
    {
      "color": "#73B97C",
      "index": 2
    }
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    //"align": "left",
    itemDistance: 10,
    //"x": 143,
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
