(function () {
  return {
    "chart": {
      "type": "column",
      width: 665,
      spacing: [5, 2, 5, 2]
    },
    "plotOptions": {
      "series": {
        "stacking": "percent",
        borderWidth: 0,
        groupPadding: 0.02
      },
      borderwidth: 0
    },
    "xAxis": {
      "type": "category",
      "tickInterval": 1,
      labels: {
        step: 1,
        rotation: -45,
        style: {
          fontSize: '10px'
        },
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
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 3,
      "align": "left",
      alignColumns: false
    },
    "series": [
      {
        "color": "#2f656b",
        "index": 0
      },
      {
        "color": "#73b97c",
        "index": 1
      },
      {
        "color": "#d7e8d2",
        "index": 2
      }
    ]
  }
}()); 