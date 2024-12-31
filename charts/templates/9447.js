(function () {
  return {
    "xAxis": {
      //tickInterval: 10,
      tickPositioner: function () {
        var interval = 3,
          ext = this.getExtremes(),
          i = ext.dataMax,
          pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      },
      labels: {
        rotation: 0,
      }

    },
    "yAxis": {
      tickAmount: 6,
      "labels": {
        "format": "{value:,.0f}",
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .0f}</b><br/>'
    },
    "series": [
      {
        "color": "#cd9c00"
      },
      {
        "color": "#b375ab",
        visible: true,
      },
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      //itemWidth: 200,
      "itemStyle": {
         textOverflow: "none",
         whiteSpace: "wrap",
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
      marginRight: 20
    }
  }
}());
