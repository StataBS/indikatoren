(function(){
    return {
"plotOptions": {
    "series": {
      pointPadding: 20,
      borderWidth: 0,
      "pointWidth": 10,
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      },
      "stacking": "normal"
    }
  },
  "xAxis": {
  	min: 0,
    "type": "category",
    "tickInterval": 1, 
    labels: {
      padding: 0,
      step: 1,
    }
  },  
  "yAxis": {
  	 max: 1,
  	 //max: 120000,
     //tickInterval: 25,
    "labels": {
    	y:10,
      formatter: function(){
        return Highcharts.numberFormat(100 * this.value, 0, ",", " ") + '%';
      },
      //"format": "{value:,.0f}",
    },
  },
"legend": {
	  x:-1,
    enabled:true,
    "layout": "horizontal",
    "verticalAlign": "top",
    symbolPadding: 1,
    itemDistance: 3, 
    padding: 0,
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
 "series": [
  {"color": "#923F8D", index: 10, legendIndex: 0}, /**/
  {"color": "#E7CEE2", index: 9, legendIndex: 1}, /**/
  {"color": "#CD9C00", index: 8, legendIndex: 2}, /**/
  {"color": "#FABD24", index: 7, legendIndex: 3}, /**/
  {"color": "#008AC3", index: 6, legendIndex: 4}, /**/
],
  "chart": {
    "type": "column",
    "inverted": true
  },
  "tooltip": {
    pointFormatter: function(){
      return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat(100 * this.y, 1, ",", " ") + '%</b><br/>';
    },
    //"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>',
  },
};
}());
