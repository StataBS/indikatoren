(function () {
  return {
    "plotOptions": {
      "series": {
        "stacking": "normal"
      }
    },
    "yAxis": {
      //"min": -5,
      // "max": 250,
      "tickInterval": 2,
      "labels": {
        "format": "{value:,.0f}"
      },
      plotLines: [{
        color: '#B9CFD7',
        value: 0, 
        width: 1 
      }]
    },
    "xAxis": {
      "tickInterval": 1
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.percentage:.1f}%)<br/>',
      shared: false
    },
    "legend": {
      "layout": "vertical",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "right",
      "itemStyle": {
        "fontWeight": "normal",
        "width": 111,
        textOverflow: null
      },
      labelFormatter: function () {
       return this.name.replace(' Wohnungen', '<br>Wohnungen')
       .replace(' Ausbauten', '<br>Ausbauten')
       .replace('Zusammenlegungen/', '<br>Zusammen-<br>legungen/<br>')
       .replace('Zweckentfremdung', 'Zweckent-<br>fremdung')
       .replace('Sonstige ', 'Sonstige<br>');
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
      spacingTop: 5
    }
  }
}());
