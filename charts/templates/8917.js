(function () {
  return {
    "plotOptions": {
      "series": {
        "borderWidth": 0,
        //"pointWidth": 10,
        "stacking": "normal"
      }
    },
    "xAxis": {
      "type": "category",
      "tickInterval": 2
    },
    "yAxis": [{
      title: {
        text: null
      },
      "labels": {
        "format": "{value:,.0f} kg",
        "style": {
          "color": "#000000"
        },
      },
      "min": 0,
      tickAmount: 5,
    },
    {
      title: {
        text: null
      },
      "labels": {
        "format": "{value:,.0f}%",
        "style": {
          "color": "#000000"
        },
      },
      "min": 0,
      tickAmount: 5,
      "opposite": true
    }
    ],
    "series": [
      {
        "index": 2,
        "color": "#990300",
        "legendIndex": 1,
        "type": "column",
        "tooltip": {
          "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f} kg</b><br/>',
        }
      }, // Rot
      {
        "index": 1,
        "color": "#71A3B5",
        "legendIndex": 2,
        "type": "column",
        "tooltip": {
          "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f} kg</b><br/>',
        }
      }, // Blau
      {
        "color": "#000000",
        "type": "line",
        "legendIndex": 3,
        "yAxis": 1,
        "marker": {
          "enabled": false
        },
        "tooltip": {
          "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
        }
      }
    ],

    "legend": {
      "enabled": true,
      //"y": 35,
      "itemWidth": 500,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "chart": {
      //"marginBottom": 75,
      //"marginTop": 75,
      "type": "column"
    }
  }
}());
