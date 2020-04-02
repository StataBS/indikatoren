(function () {
  return {
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
        itemWidth: 10
      }
    },
    "xAxis": {
      "type": "category",
      //tickInterval: 1,
      "labels": {
        //step: 2,
        "rotation": -45
      },
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
      }
    },
    "yAxis": {
      //tickAmount: 5,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "series": [
      { "color": "#CD9C00", "visible": true } /* hellbraun*/
    ],
    "legend": {
      "enabled": false,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
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
      "spacingTop": 5
    }
  };
}());