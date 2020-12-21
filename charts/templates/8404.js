(function(){
    return {

    "series": [
        {"color": "#71A3B5"},
        {"color": "#FFBB58"},
        {"color": "#8A8A8A"},
       // reversedStacks: true,       
  ],
  title: {
    useHTML: true
},
  "xAxis": {
      "type": "category"
  },
  yAxis: {
    reversedStacks: false,
    tickInterval: 20,
    max: 100,
},
legend: {
    reversed: true,
    labelFormatter: function(){
        return this.name.replace("/", " /<br/>");
    }
  }
	}
}());

 