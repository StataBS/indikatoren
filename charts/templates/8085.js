(function () {
  return {
    "plotOptions": {
      "series": {
        pointPadding: 100,
        "pointWidth": 20,
        "stacking": "normal"
      }
    },
    "xAxis": {
      min: 0,
      "type": "category",
      "tickInterval": 1,
      labels: {
        formatter: function () {
          return this.value.replace('Kleinhüningen', 'Kleinh.');
        }
      }
    },
    "yAxis": {
      "tickInterval": 100,
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      itemDistance: 5
    },
    "series": [
      {
        "color": "#9E7C59", index: 5, legendIndex: 0
      },
      {
        "color": "#C4AB91", index: 4, legendIndex: 1
      },
      {
        "color": "#FFDA80", index: 3, legendIndex: 2
      },
      {
        "color": "#C9D6DB", index: 2, legendIndex: 3
      },
     /* {
        "color": "#6F6F6F", index: 1, legendIndex: 4
      },*/
    ],
    "chart": {
      "type": "column",
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
      "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
      "shared": true
    }
  }
}());
