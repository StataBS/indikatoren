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
      "stacking": "percent"
    }
  },
  series: [
    {"color": "#68AB2B", index: 3, legendIndex: 0}, /**/
    {"color": "#FABD24", index: 2, legendIndex: 1}, /**/
    {"color": "#DC440E", index: 1, legendIndex: 2}, /**/
    {"color": "#8A8A8A", index: 0, legendIndex: 3}, /**/
  ],
  chart: {
    inverted: true,
    type: "column", 
    marginRight: 20
  },
  "tooltip": {
    "shared": false, 
    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} </b> ({point.percentage:.1f}%)<br/>',
    "footerFormat": '<span style="color: black">\u25CF</span> Total: <b>{point.total:,.0f}</b>',
  },
  legend: {
    itemDistance: 0,
  symbolPadding: 2,
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
    tickInterval: 20,
    "labels": {
		  "format": "{value}%"
     }
  },
  xAxis: {
    reversed: false,
  },

};
}());