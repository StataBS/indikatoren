(function(){
    return {
 "series": [
  {"color": "rgb(103,39,115)", index: 2, legendIndex: 0}, /*Sek1*/
  {"color": "rgb(180,117,171)", index: 1, legendIndex: 1}, /*Sek2*/
  {"color": "rgb(231,207,226)", index: 0, legendIndex:2}, /*Tert.*/
],
  "chart": {
    "inverted": true,
    marginLeft: 120,
    spacingRight: 3
  }, 
  legend: {
    "enabled": true,
    padding: 1,
    itemDistance: 1,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },  
  xAxis: {
    labels: {
      step: 1,
      y: 3,
      formatter: function() {
      	return this.value.replace("und", "u.");
      },
      style: undefined
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
  exporting: {
    enabled: false
  }
};
}());
