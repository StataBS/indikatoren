(function () {
  return {
    "xAxis": {
      "tickInterval": 1,
      labels: {
        step: 2,
        rotation: -45,
        style: {
          textOverflow: 'none', // prevents ellipsis
        }
      }
    },
    "yAxis": {
      "min": 0,
      "labels": {
        "format": "{value:,.0f}",
        x: -10
      },
      tickInterval: 1000
    },
    "tooltip": {
      "shared": false,
      //"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.0f}</b><br/>',
    },
    "series": [
      {
        "color": "#B00000",
        "legendIndex": 1
      }, /* rot */
      {
      "color": "#662673",
        "legendIndex": 2
      }, /* violett */
      {
      "color": "#008AC3",
        "legendIndex": 3
      }, /* blau */
      {
        "color": "#FABD24", 
        "legendIndex": 4
      }, /* gelb */
        
    ],
    "legend": {
      "enabled": true,
      "layout": "vertical",
      "verticalAlign": "middle",
      "align": "right",
      y: -10,
      "itemMarginBottom": 5,
      //itemDistance: 0,
      //padding: 0,
      //symbolPadding: 2,
      labelFormatter: function () {
        return this.name.replace(" ", "<br>"); //.replace("module","<br>-module");
      }
    },
  }
}());