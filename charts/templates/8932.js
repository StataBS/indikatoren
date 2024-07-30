(function () {
  return {
    "chart": {
      "type": "column",
      //spacingBottom: 40
    },
    plotOptions: {
      column: {
        grouping: false,
      }
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
    legend: {
      verticalAlign: 'top',
      align: 'left'
    },
    "series": [
      {
        "color": "#0070C0"
      },
      {
        "color": "#FABD24"
      }
    ],
    "tooltip": {
      "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'
    },
  }
}());