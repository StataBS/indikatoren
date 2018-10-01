(function(){
    return {
   plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0,
        }
   },

  "xAxis": {
    "type": "category",
          "labels": {
          	step: 1,
          	rotation: -45,
        }  

  },
  "yAxis": [
    {
      "labels": {
        "format": "{value:,.0f}"
      }, 
      "style": {
        "color": "#000000"
      },
      "title": "",
    },
    {
      opposite: true,
      "labels": {
        "format": "{value:,.0f}"
      },
      "style": {
        "color": "#000000"
      },
      "title": "",
    }
    ],
  "series": [
  {"color": "#A8C3CA"},
  {"color": "#083038"}, 
  {"color": "#B375AB"},  
  {"color": "#662673"},
  {
    color: "orange", 
    type: "scatter",
    yAxis: 1,
    marker: {
      enabled: true,
      radius: 2,
    }, 
    tooltip: {
       headerFormat: '<span style="font-size: 10px"> {point.key}</span><br/>',
    }
  },
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }, 
    itemDistance: 5,
    labelFormatter: function(){
      return this.name.replace(" (", "<br/>(");
    },
  },
  tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
  },  
  "chart": {      
    "type": "column",
    "inverted": false
  }
}
}());

 