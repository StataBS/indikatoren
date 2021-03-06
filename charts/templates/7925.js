(function () {
  return {
    "chart": {
      "alignTicks": false
    },
    "yAxis": [{
      gridLineColor: '#B9CFD7',
      gridLineWidth: 0.5,
      "labels": {
        "format": "{value:,.0f}",
        "style": {
          "color": "#000000",
          fontSize: '10px'
        }
      },
      "min": 0,
      tickAmount: 4,
      "title": {
        enabled: false
      }
    },
    {
      "title": {
        enabled: false
      },
      "labels": {
        "format": "{value:,.1f}%",
        "style": {
          "color": "#000000",
          fontSize: '10px'
        }
      },
      "min": 0,
      max: 4.5,
      tickAmount: 4,
      "gridLineWidth": 0,
      "opposite": true
    }
    ],
    "xAxis": {
      "tickInterval": 1,
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
        color: "#a8c3ca",
        index: 0,
        type: "column",
        pointWidth: 20,
        borderWidth: 0
      },
      {
        "yAxis": 1,
        "color": "#246370",
        "index": 1,
        type: 'line',
        "marker": {
          "symbol": "circle",
          "enabled": false
        },
        tooltip: {
          "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>'
        }
      }
    ]
  };
}());
