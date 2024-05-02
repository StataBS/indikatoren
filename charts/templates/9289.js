(function () {
  return {
    chart: {
      marginRight: 20
    },
    "xAxis": {
      tickInterval: 1
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}%"
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>'
    },
    "series": [
      {"color": "#3C3C3C",id:0, showInLegend: true, },
      { color: "#3C3C3C",id:1, linkedTo:'0'}, 
      {"color": "#008AC3",id:2},
      {"color": "#B00000",id:3},
      { color: "#FF8028",id:4, showInLegend: true, }, 
      {"color": "#FF8028",id:5, linkedTo:'4'},
    ],
    
     "legend": {
         labelFormatter: function () {
          return this.name.replace(" (bis 2017)","");
        },
      "enabled": true,
      itemDistance: 20, 
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
       },
    "plotOptions": {
      "line": {
        "connectNulls": true,
        "marker": {
          "enabled": false,
          "symbol": "circle",
          }
      }
    }
  }
}());
