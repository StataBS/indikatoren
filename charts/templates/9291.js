(function(){
    return {
"plotOptions": {
    "series": {
     // pointPadding: 100,
     // borderWidth: 0,
      //"pointWidth": 10,
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      },
      "stacking": "normal"
    }
  },
  "xAxis": {
    "type": "category",
    "tickInterval": 1
  },  
  "yAxis": {
     //tickInterval: 60000,
    "labels": {
      "format": "{value:,.0f}",
    },
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
 "series": [
  {"color": "#FABD24", index: 0, legendIndex: 2},
  {"color": "#662673", index: 1, legendIndex: 1}, /**/
  {"color": "#68AB2B", index: 2, legendIndex: 0}, /**/
],
  "chart": {
    "renderTo": 'container-I.01.1.0016', 
    "marginBottom": 75,
    //"marginTop": 75,
    "type": "column",
    "inverted": false
  },
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>', "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
    "shared": false
  },  
}
}());
