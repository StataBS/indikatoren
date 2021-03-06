(function () {
  return {
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
        itemWidth: 10,

      }
    },
    "xAxis": {
      "type": "category",
      tickInterval: 5,
      "labels": {
        "rotation": 0
      },
      tickPositioner: function () {
        var interval = 5,
          ext = this.getExtremes(),
          i = ext.dataMax,
          pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      }
    },
    "yAxis": [{
      "labels": {
        "format": "{value:,.0f}",
        "style": {
          "color": "#000000"
        }
      },
      "min": 0,
      "max": 600,
      tickAmount: 7,
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
      tickAmount: 7,
      "gridLineWidth": 0,
      "opposite": true
    }
    ],
    "series": [
      { "color": "#CD9C00", "visible": true }, /* hellbraun*/
      { "color": "#83522E", "visible": true }, /* dunkelbraun */
      { "color": "#000000", "visible": true, "type": "line", "marker": { "enabled": false }, "yAxis": 1 } /* dunkelbraun */
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      alignColumns: false,
      //"x": 25,
      //"y": 25,    
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    tooltip: {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
      "shared": false
    },
    "chart": {
      "type": "column",
      "inverted": false,
      //"spacingBottom": 40
    }
  }
}());