(function(){
    return {
 "series": [
  {"color": "rgb(103,39,115)", index: 2, legendIndex: 0}, /*Sek1*/
  {"color": "rgb(180,117,171)", index: 1, legendIndex: 1}, /*Sek2*/
  {"color": "rgb(231,207,226)", index: 0, legendIndex:2}, /*Tert.*/
],
  "chart": {
  	marginRight: 10,
    "inverted": true, 
  }, 
  legend: {
    itemDistance: 2,
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    padding: 1,	  
    "itemStyle": {
      "fontWeight": "normal"
    }
  },  
  xAxis: {
    labels: {
      formatter: function() {
      	return this.value.replace("Eingebürgerte", "Eingebürgerte<br/>").replace("seit", "<br/>seit ");
      }
    }
  },
  yAxis: {
    tickInterval: 20,
    labels: {
      rotation:0,
      y: 18, 
      overflow: 'justify',
      style: {
        textOverflow: 'none'
      }
    }
  }

};
}());


