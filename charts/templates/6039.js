
(function(){
    return {
"plotOptions": {
    "series": {
      //pointPadding: 0,
      borderWidth: 0,
      pointWidth: 20,
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      },
      "stacking": "normal"
    }
  },
  "xAxis": {
    "labels": {
     align: "left",
     x: -60,
  	   },
    "type": "category",
    "tickInterval": 1
  },  
  "yAxis": {
  	 max: 100,
     tickInterval: 20,
    "labels": {
      "format": "{value:,.0f}%",
    },
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	  //"y": 40,
	  //"itemWidth": 200,
	  itemDistance: 0,
	  padding: 0,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
 "series": [
  {"color": "#083038", "index": 0, "legendIndex":0}, /*gelb*/
  {"color": "#246370", "index": 1, "legendIndex":1}, /*blau1*/
  {"color": "#689199", "index": 2, "legendIndex":2}, /*blau2*/
  {"color": "#A8C3CA", "index": 3, "legendIndex":3}, /*blau3*/
  {"color": "#D3E2E4", "index": 4, "legendIndex":4}, /*blau4*/
  {"color": "#FABD24", "index": 5, "legendIndex":5}, /*blau5*/
  ],
  "chart": {
    //"renderTo": 'container-I.01.1.0016', 
    "marginBottom": 75,
    //"marginTop": 75,
    "type": "column",
    "inverted": true,
     marginLeft: 70, 

  },
  "tooltip": {
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
   "shared": false
  },
}
}());
