(function () {
  return {
    "chart": {
      // "marginBottom": 85,
      //"marginTop": 75,
      "marginRight": 30,
      "type": "column",
      inverted: true,
    },
    "plotOptions": {
      "series": {
        "pointWidth": 15,
        "stacking": "normal",
        borderWidth: 0,
      }
    },
    "xAxis": {
      "type": "category"
    },
    "yAxis": {
      tickAmount: 6,
      labels: { 
      	format: "{value:,.0f}", 
      	style:{ color: "black", },
      },
      "reversedStacks": false
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
      "footerFormat": '<span style="color: black">\u25CF</span> Total: <b>{point.total:,.0f}</b>',
      "shared": false
    },
    "legend": {
      enabled: true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemMarginBottom": 5,
    },
    "series": [
      {
        "color": "#246370",
        "legendIndex": 1
      },
      {
        "color": "#D3E2E4",
        "legendIndex": 2
      },
      {
        "color": "#68AB2B",
        "legendIndex": 3
      },
    ],
  };
}());
