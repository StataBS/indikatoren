var chartOptions = {
  "plotOptions": {
    "series": {
      "dataLabels": {
        "enabled": false
      },
      "stacking": "percent"
    }
  },
  "yAxis": {
    "labels": {
      "format": "{value}%",
    },
  },
  "legend": {
    "enabled": true,
    "layout": "vertical",
    "verticalAlign": "top",
    "align": "top",
		"y": 40,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#2f656b",
      "index": 1
    },
    {
      "color": "#689199",
      "index": 2
    },
    {
      "color": "#923f8d",
      "index": 3
    },
    {
      "color": "#008ac3",
      "index": 4
    }
  ],
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
    "shared": false
  },
  "chart": {
    "marginTop": 150,
    "type": "column"
  }
};