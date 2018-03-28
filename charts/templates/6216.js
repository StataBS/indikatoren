(function(){
    return {
      "xAxis": {
        "type": "category",
         "labels": {
            "formatter": function() {
            	return this.value;
            }
        } 
      },  
      "tooltip": {
        valueDecimals: 1
      },  
      "series": [
        {"color": "#C8C8C8", index: 1, legendIndex: 1}, /*grau*/
        {"color": "#CD9C00", index: 2, legendIndex: 2}, /*dunkelrot*/
        {"color": "#FABD24", index: 3, legendIndex: 3}, /*hellrot*/
        {"color": "#73B97C", index: 4, legendIndex: 4}, /*hellgrün*/
        {"color": "#007A2F", index: 5, legendIndex: 5} /*dunkelgrün*/
      ],
  "chart": {      
     "inverted": true,
  },
    };
}());