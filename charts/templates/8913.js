(function () {
  return {
    "yAxis": [{
      "min": 0,
      "max": 2000000,
      "tickInterval": 400000,
      title: {
        text: null,
        "color": "#000000",
        "fontSize": null
      },
      "labels": {
        "format": "{value:,.0f}",
        x: -10,
        style: {
          color: "black",
        },
      },
    },
    {
      "min": 0,
      max: 100,
      "tickInterval": 20,
      "title": {
        text: null,
        "style": {
          "color": "#000000",
          "fontSize": null
        },
      },
      "labels": {
        "format": "{value:,.0f}%",
        x: 10,
        style: {
          color: "black",
        },
      },
      "opposite": true
    }
    ],
    "xAxis": {
      labels: {
        rotation: -45,
      },
      tickPositioner: function () {
        var interval = 2,
          ext = this.getExtremes(),
          i = ext.dataMax,
          pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      }
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemMarginBottom": 5,
      "itemWidth": 300,
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
        "yAxis": 1,
        "legendIndex": 3,
        "tooltip": {
          "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
        },
        "marker": {
          "enabled": false
        },
      }
    ],
    "tooltip": {
      //"shared": true
    },
    "chart": {
      "alignTicks": false
    }
  }
}());