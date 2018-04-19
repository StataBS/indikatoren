(function(){
    return {
 series: [
    {"color": "#923F8D", index: 1, legendIndex: 0}, /*Deutschland*/
    {"color": "#E7CEE2", index: 0, legendIndex: 1}, /*Italien*/
  ],
  chart: {
    inverted: true
  },
  legend: {
    itemDistance: 15,
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	  //"y": 45,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },  
  yAxis: {
    tickInterval: 20
  },
  xAxis: {
    labels: {
      formatter: function() {
      	return this.value.replace(" ", "<br/>");
      }
    }
  },

};
}());


