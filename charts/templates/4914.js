(function () {
  return {
    "yAxis": [{
      "title": {
        "text": null
      },
      "labels": {
        "format": "{value:,.0f}",
        "style": {
          "color": "#000000"
        }
      },
      "min": 0,
    },
    {
      "title": {
        "text": null
      },
      "labels": {
        "format": "{value:,.0f}",
        "style": {
          "color": "#000000"
        }
      },
      "min": 0,
      "opposite": true
    }
    ],
    "xAxis": {
      tickPositioner: function () {
        var positions = [],
          ext = this.getExtremes(),
          xMax = Math.round(ext.max),
          xMin = Math.round(ext.min) + 1;
        var xMin_even = Math.round(ext.min);


        if (xMax % 2 == 1) {

          for (var i = xMin; i < xMax; i++) {
            if (i % 2 == 1) {
              positions.push(i);
            }
          }
          positions.push(xMax);
          return positions;
        } else if (xMax % 2 == 0) {
          for (var i = xMin_even; i < xMax; i++) {
            if (i % 2 == 0) {
              positions.push(i);
            }
          }
          positions.push(xMax);
          return positions;
        }
      },
      "tickInterval": 2,
      "type": "category"
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
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
    },
    "series": [
      {
        "color": "#cd9c00",
        "index": 0,
        "type": "column",
        "yAxis": 0,
        //"pointWidth": "10"
      },
      {
        "color": "#73b97c",
        "index": 1,
        "yAxis": 1
      }
    ],
    "tooltip": {
      "shared": false
    },
  };
}());
