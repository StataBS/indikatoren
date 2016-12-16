﻿chartOptions['I.09.1.0002'] = {
  "plotOptions": {
    "series": {
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      },
      "stacking": "percent"
    }
  },
  "yAxis": {
    "labels": {
      "format": "{value}%",
    }
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.2f}%)<br/>',
    shared: false
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
      "color": "#73B97C",
      "index": 1
    },
    {
      "color": "#008AC3",
      "index": 2
    },
    {
      "color": "#CD9C00",
      "index": 3
    },
    {
      "color": "#662673",
      "index": 0
    }
  ],
  "chart": {
    "marginBottom": 65,
    "marginTop": 75,
    "zoomType": "y",
    "type": "column"
  }
};
