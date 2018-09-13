(function(){
    return {
 "series": [
  {"color": "rgb(103,39,115)", index: 2, legendIndex: 0}, /*Sek1*/
  {"color": "rgb(180,117,171)", index: 1, legendIndex: 1}, /*Sek2*/
  {"color": "rgb(231,207,226)", index: 0, legendIndex:2}, /*Tert.*/
],
  "chart": {
    "inverted": true
  }, 
  subtitle: {
    useHTML: true,
  },
  legend: {
    itemDistance: 5,
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	  //"y": 45,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },  
  xAxis: {
    labels: {
      useHTML: false,
      formatter: function() {
      	return this.value;//.replace("Eingebürgerte ", "Eingebürgerte<br/>");
      }
    }
  },
  yAxis: {
     tickInterval: 20,
  }
};
}());


