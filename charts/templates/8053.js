(function () {
  return {
    "chart": {
      "type": "column"
    },
    "plotOptions": {
      "series": {
        "stacking": "percent"
      },
      //borderwidth: 0,
      //groupPadding: 0
    },
    "xAxis": {
      "type": "category",
      "tickInterval": 1,
      labels: {
        step: 1,
        rotation: -45,
        formatter: function () {
          return this.value.replace('Kleinhüningen', 'Kleinh.');
        }
      }
    },
    "yAxis": {
      "tickInterval": 10,
      "labels": {
        "format": "{value}%"
      },
      "min": 0
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
      "shared": false
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "align": "left",
      "verticalAlign": "top",
      "itemMarginBottom": 5
    },
    "series": [
      {
        "color": "#2f656b",
      },
      {
        "color": "#73b97c",
      },
      {
        "color": "#d7e8d2",
      }
    ]
  }
}());

