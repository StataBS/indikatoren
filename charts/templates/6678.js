(function(){
    return {
  series: [
    {"color": "#923F8D", index: 1, legendIndex: 0}, /*Deutschland*/
    {"color": "#E7CEE2", index: 0, legendIndex: 1}, /*Italien*/
  ],
  chart: {
    inverted: true, 
    marginLeft: 120,
    spacingRight: 3,
  },
  legend: {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    padding: 1,
    itemDistance: 1,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },  
  yAxis: {
    tickInterval: 20, 
     labels: {
       y: 18, 
       overflow: 'justify',
       style: {
         textOverflow: 'none'
       }
     }, 
  },
  xAxis: {
    labels: {
      step: 1,
      formatter: function() {
      	return this.value.replace("und", "u.");
      },
      style: undefined
    }
  },

};
}());

