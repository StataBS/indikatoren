var chartOptions = {
  "plotOptions": {
    "series": {
      "stacking": "percent"
    }
  },
  "xAxis": {
    "type": "category"
  },
  "yAxis": {
    "tickInterval":10,
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
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 5,
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal"
    }
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
      "color": "#cd9c00",
      "index": 2
    }
  ],
  "chart": {
    "type": "column"
  }
};

