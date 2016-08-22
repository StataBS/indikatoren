chartOptions['I.09.1.0026'] = {
  "plotOptions": {
    "series": {
      "stacking": "normal"
    }
  },
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}",
    }
  },
  "xAxis": {
    "tickInterval": 1
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.2f}%)<br/>',
    shared: false
  },
  "legend": {
		"verticalAlign": "top",
    "align": "left",
		"floating": false,
		"y": 20,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#007a2f",
      "index": 0,
      "type": "column"
    },
    {
      "color": "rgba(0, 122, 47, 0.38)",
      "index": 1,
      "type": "column"
    },
    {
      "color": "#b00000",
      "marker": {
        "enabled": false
      },
      "index": 2,
      "type": "line"
    }
  ],
  "chart": {
    "marginBottom": 65,
    "marginTop": 100,
    "type": "column"
  }
};

