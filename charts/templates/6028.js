(function(){
    return {
    "yAxis":{
    tickInterval:25,
    },
 	"xAxis": {
        "type": "category",
        "labels": {
           useHTML: true,
           align: "left",
            x: -140,
            "formatter": function() {
                  	 return this.value.replace("  ", "<br/>");
            }
        } 
  },  
  plotOptions: {
  	column: {
  		groupPadding: 0,

  	}
  },
    "series": [
      {"color": "#007a2f", "index": 9, "legendIndex":0}, /*grün dunkel2*/
      {"color": "#44ab2b", "index": 8, "legendIndex":1}, /*grün mittel*/
      {"color": "#73ba7c", "index": 7, "legendIndex":2}, /*grün dunkel1*/
      {"color": "#d7e9d2", "index": 6, "legendIndex":3}, /*grün hell*/
      {"color": "#999999", "index": 5, "legendIndex":4}, /*blau hell */
      ],
    "chart": {     
    	 marginLeft: 150, 
         "inverted": true,
    },
    tooltip: {
      valueDecimals: 1
    },
    exporting: {
      allowHTML: true,
    }
};
}());

