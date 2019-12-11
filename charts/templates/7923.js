(function () {
  return {
    "plotOptions": {
      "series": {
        "stacking": "normal"
      }
    },
    "yAxis": {
      "tickInterval": 2,
      "labels": {
        "format": "{value:,.0f}"
      },
      plotLines: [{
        value: 0,
        color: '#B6CFD7',
        width: 1,
        zIndex: 0,
      }]
    },
    "xAxis": {
      "tickInterval": 1
    },
    "legend": {
      "layout": "vertical",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "right",
      "itemStyle": {
        "fontWeight": "normal",
        "width": 80,
        textOverflow: null
      },
      labelFormatter: function () {
        var l = this.name.replace('Zweckentfremdung', 'Zweckentfremdung-<br>');
        l = l.replace('Zusammen', 'Zusammen-<br>');
        return l;
      }
    },
    "series": [
      {
        "color": "#007a2f"
      },
      {
        "color": "#2f656b"
      },
      {
        "color": "#68ab2b"
      },
      {
        "color": "#73b97c"
      },
      {
        "color": "#990300"
      },
      {
        "color": "#fabd24",
        "marker": {
          "enabled": false
        },
        "type": "line",
        tooltip: {
          pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
          shared: false
        }
      }
    ],
    "chart": {
      "zoomType": "xy",
      "type": "column",
      spacing: [5, 2, 2, 2]
    }
  }
}());
