chartOptions['I.01.1.0013'] = {
  "plotOptions": {
    "series": {
      "dataLabels": {
        "style": {
          "fontSize": 10
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
      "color": "#73B97C"
    },
    {
      "color": "#008AC3"
    },
    {
      "color": "#CD9C00"
    },
    {
      "color": "#662673"
    },
    {
      "color": "#73B97C"
    },
    {
      "color": "#008AC3"
    },
    {
      "color": "#CD9C00"
    },
    {
      "color": "#662673"
    },
    {
      "color": "#73B97C"
    }        
  ],
  "chart": {
    "renderTo": "container-I.01.1.0013",
    "marginBottom": 65,
    "marginTop": 75,
    "type": "column"
  }
};
