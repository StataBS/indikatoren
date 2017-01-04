var chartOptions = {
  "plotOptions": {
    "series": {
      "stacking": null,
      "groupPadding": 0.05
    }
  },
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}"
    }
  },
  "xAxis": {
    "tickInterval": 1
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.percentage:.2f}%)<br/>',
    shared: false
  },
  "legend": {
		"verticalAlign": "top",
		"floating": false,
		"y": 20,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#68ab2b"
    },
    {
      "color": "#cd9c00"
    },
    {
      "color": "#008ac3"
    },
    {
      "color": "#2e1435",
      "marker": {
        "enabled": false
      },
      "type": "line"
    }    
  ],

  "chart": {
    "marginBottom": 65,
    "marginTop": 100,
    "type": "column"
  }
};
