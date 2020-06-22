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
        "yAxis": 0, visible: true,
        legendIndex: 9
      }, /*blau: Allg. Verwaltung   */
      {
        "color": "#a8c4cb",
        "yAxis": 0, visible: true,
        legendIndex: 7
      }, /*hellblau: Öff. Sicherheit     */
      {
        "color": "#ffbb58",
        "yAxis": 0, visible: true,
        legendIndex: 1
      }, /*hellorange: Bildung      */
      {
        "color": "#b475ab",
        "yAxis": 0, visible: true,
        legendIndex: 4
      }, /*hellviolett: Kultur und Sport      */
      {
        "color": "#44ab2b",
        "yAxis": 0, visible: true,
        legendIndex: 5
      }, /*grün: Gesundheit*/
      {
        "color": "#007a2f",
        "yAxis": 0, visible: true,
        legendIndex: 3
      },  /*dunkelgrün: Soziale Sicherheit      */
      {
        "color": "#672773",
        "yAxis": 0, visible: true,
        legendIndex: 6
      }, /*violett: Verkehr      */
      {
        "color": "#b00000",
        "yAxis": 0, visible: true,
        legendIndex: 8
      }, /*rot: Umweltschutz      */
      {
        "color": "#ff8028",
        "yAxis": 0, visible: true,
        legendIndex: 10
      }, /*orange: Volkswirtschaft      */
      {
        "color": "#cd9c00",
        "yAxis": 0, visible: true,
        legendIndex: 2
      }, /*hellbraun: Finanzen, Steuern      */
      {
        "color": "#E6E6E6",
        "index": -1,
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
      //"itemWidth": 200,
      "layout": "vertical",
      "verticalAlign": "middle",
      "itemMarginBottom": 5,
      "align": "right",
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
    },
    chart: {
      width: 665
    }
  }
}());
