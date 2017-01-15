var chartOptions = {
  "plotOptions": {
    "series": {
      "stacking": null,
      "groupPadding": 0.1
    }
  },
  "yAxis": [
   {
    "title": {
      "style": {
        "color": "#000000",
        "fontSize": null
      },
      "text": null
    },
    "labels": {
      "format": "{value:,.0f}",
      "style": {
        "color": "#000000"
      }
    }
  },
  {
    "title": {
      "style": {
        "color": "#000000",
        "fontSize": null
      },
      "text": null
    },
    "labels": {
      "format": "{value:,.1f}%",
      "style": {
        "color": "#000000"
      }
    },
    "gridLineWidth": 0,
    "opposite": true
  },
  ],
  "xAxis": {
    "tickInterval": 1
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    shared: false
  },
  "legend": {
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 7,
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#0a3b19",
      "index": 2
    },
    {
      "color": "#b00000",
      "marker": {
        "enabled": false
      },
      "yAxis": 1,
      "index": 5,
      "type": "line",
    },
    {
      "color": "#68ab2b",
      "index": 1,
      "visible": false
    },
    {
      "color": "#923f8d",
      "marker": {
        "enabled": false
      },
      "yAxis": 1,
      "index": 4,
      "type": "line",
      "visible": false
    },
    {
      "color": "#d7e8d2",
      "index": 0,
      "visible": false
    },
    {
      "color": "#ff8028",
      "marker": {
        "enabled": false
      },
      "yAxis": 1,
      "index": 3,
      "type": "line",
      "visible": false
    }
  ],
  "chart": {
    "marginBottom": 95,
    "marginTop": 75,
    "type": "column"
  }
};
