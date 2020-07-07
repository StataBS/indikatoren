(function () {
  return {
    "xAxis": {
      "tickInterval": 4,
       "type": "category",
       labels:{
           "formatter": function() {
            return this.value.split("-").slice(0, -1);
      },
       }
    },
    "yAxis": {
      "min": 90,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
    }, 
    "series": [
      { "color": "rgb(71,71,71)" },
      { "color": "rgb(255,128,40)" },
      { "color": "rgb(250,189,36)" },
      { "color": "#B375AB" },
      { "color": "rgb(153,3,0)" }
    ],
    "legend": {
      "enabled": true,
      "x": 30,
      //"y": 35,
      //"itemWidth": 145,
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
          "radius": 3
        }
      }
    }
  };
}());
