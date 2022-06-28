(function () {
  return {
    "xAxis": {
     "tickInterval": 1,
     labels: {
       rotation: -45
     }
      //"type": "category",
    },
    "yAxis": {
      tickAmount: 5,
      "labels": {
        format: "{value:,.0f}%"
      },
      /*tickInterval: 20,*/
      "min": 0,
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
    }, 
    "series": [
      {color: "black"},
      {color: "#9E7C59"},
      {color: "#689199"},
      {color: "#923F8D"},
      {color: "#CD9C00"},
      {color: "#68AB2B"},
      {color: "#DC440E"},
    ],
    "legend": {
      "enabled": true,
      //"x": 30,
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
    },
    chart: {
      width: 665
    }
  };
}());
