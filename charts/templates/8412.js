(function(){
    return {
        "series": [
            {"color": "#007A2F"},
            {"color": "#73BA7C"},
            {"color": "#FFBB58"},
            {"color": "#FF8028"},
            { "color": "#6F6F6F"}        
    ],
    legend: {
        reversed: true,
        labelFormatter: function(){
            return this.name.replace("/", " /<br/>");
    
          }
      
    },  
    yAxis: {
        reversedStacks: false,
        tickInterval: 20,
        max: 100,
    },     
    "xAxis": {
        "type": "category"
    }
	}
}());

 