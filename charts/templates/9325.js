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
      tickAmount: 7,
      "labels": {
        "format": "{value:,.0f}"
      }, 
      "style": {
        "color": "#000000"
      },
      "title": "",
    },
    {
      tickAmount: 7,
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
    color: "#FABD24", 
    type: "scatter",
    yAxis: 1,
    marker: {
      enabled: true,
      radius: 2,
      symbol: "circle"
    }, 
    tooltip: {
       headerFormat: '<span style="font-size: 10px"> {point.key}</span><br/>',
    }
  },
  {
    color: "#008AC3", 
    type: "scatter",
    yAxis: 1,
    marker: {
      enabled: true,
      radius: 2,
      symbol: "circle"
    }, 
    tooltip: {
       headerFormat: '<span style="font-size: 10px"> {point.key}</span><br/>',
    }
  },
  ],
  "legend": {
   // margin: 0,
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    itemWidth: 190,
    "itemStyle": {
      "fontWeight": "normal",
      textOverflow: 'nowrap',
      whiteSpace: "nowrap"
    },
    itemDistance: 0,
    labelFormatter: function(){
      return this.name.replace(" (", "<br/>(");
    },
  },
  tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
  },  
  "chart": {      
    "type": "column",
    "inverted": false,
    width: 662,
    height: 208,
  }
}
}());

 