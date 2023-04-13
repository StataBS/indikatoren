(function () {
  return {
    "xAxis": {
      "tickInterval": 1
    },
    "yAxis": [{
      "labels": {
        "format": "{value:,.0f}",
        "style": {
          "color": "#000000"
        }
      },
      "min": 0,
      "max": undefined,
      "title": ""
    },
    {
      "title": {
        "style": {
          "color": "#000000",
          "fontSize": null
        },
        "text": null
      },
      "labels": {
        "format": "{value:,.0f}",
        "style": {
          "color": "#000000"
        }
      },
      "min": 0,
      "max": undefined,
      "gridLineWidth": 0,
      "opposite": true
    }
    ],
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
    },
    "series": [
      {
        "color": "#256370",
        index: 10, "yAxis": 0, visible: true
      }, /*blau*/
      {
        "color": "#a8c4cb",
        index: 9, "yAxis": 0, visible: true
      }, /*hellblau*/
      {
        "color": "#ffbb58",
        index: 8, "yAxis": 0, visible: true
      }, /*hellorange*/
      {
        "color": "#b475ab",
        index: 7, "yAxis": 0, visible: true
      }, /*hellviolett*/
      {
        "color": "#44ab2b",
        index: 6, "yAxis": 0, visible: true
      }, /*grün*/
      {
        "color": "#007a2f",
        index: 5, "yAxis": 0, visible: true
      },  /*dunkelgrün*/
      {
        "color": "#672773",
        index: 4, "yAxis": 0, visible: true
      }, /*violett*/
      {
        "color": "#b00000",
        index: 3, "yAxis": 0, visible: true
      }, /*rot*/
      {
        "color": "#ff8028",
        index: 2, "yAxis": 0, visible: true
      }, /*orange*/
      {
        "color": "#cd9c00",
        index: 1, "yAxis": 0, visible: true
      }, /*hellbraun*/
      {
        "color": "#E6E6E6",
        "index": 0,
        "legendIndex": 12,
        "type": "column",
        "borderWidth": 0,
        "yAxis": 1,
        states: {
          hover: {
            brightness: -0.05,
          }
        },
      }, // grau
    ],
    "legend": {
      "enabled": true,
      //"x": 45,
      //"y": 35,
      "itemWidth": 200,
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
