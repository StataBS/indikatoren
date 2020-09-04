(function () {
  return {
    "chart": {
      "width": 665,
      "alignTicks": false
    },
    "yAxis": [{
      "min": 0,
      //"max": 200000,
      "tickInterval": 25000,
      title: {
        text: null,
      },
      "labels": {
        "format": "{value:,.0f}",
        style: {
          color: "black",
          "fontSize": '10px'
        },
      },
    },
    {
      min: 95,
      max: 117.5,
      tickInterval: 2.5,
      title: {
        text: null
      },
      "labels": {
        "format": "{value:,.1f}",
        style: {
          color: "black",
          "fontSize": '10px'
        },
      },
      "opposite": true
    }
    ],
    "xAxis": {
      "tickInterval": 1
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemMarginBottom": 5
    },
    "series": [
      {
        "color": "#FFBB58", // Bevölkerung
        "index": 0,
        "type": "column",
        pointPadding: 0,
        borderWidth: 0,
        legendIndex: 1,
        "tooltip": {
          "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
        },
      },
      {
        "color": "#B00000", // Bevölkerung indexiert
        "index": 1,
        "type": "line",
        connectNulls: true,
        "yAxis": 1,
        "marker": {
          "enabled": true,
          radius: 3
        },
        legendIndex: 2,
        "tooltip": {
          "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
        },
      },
      {
        "color": "#A8C3CA", // Beschäftigte
        "index": 0,
        "type": "column",
        pointPadding: 0,
        borderWidth: 0,
        //"pointWidth": "8",
        legendIndex: 3,
        "tooltip": {
          "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
        },

      },
      {
        "color": "#246370", // Beschäftigte indexiert
        "index": 1,
        "type": "line",
        connectNulls: true,
        "yAxis": 1,
        "legendIndex": 3,
        "tooltip": {
          "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
        },
        "marker": {
          "enabled": true,
          radius: 4
        },
      }
    ],
  }
}());