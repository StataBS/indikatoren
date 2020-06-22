(function () {
  return {
    "chart": {
      //"marginBottom": 75,
      //"marginTop": 75,
      "type": "column"
    },
    "yAxis": {
      tickInterval: 10,
      "labels": {
        "format": "{value:,.0f}%"
      },
    },
    "xAxis": {
      "type": "category",
      "tickInterval": 1,
      labels: {
        formatter: function () {
          return this.value.replace(' ', '<br>');
        }
      }
    },
    "legend": {
      "enabled": false
    },
    "series": [
      {
        "color": "#0070C0"
      }
    ],
    "tooltip": {
      "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'
    },
  }
}());