(function () {
  return {
    "chart": {
      "type": "line"
    },
    "plotOptions": {
      "series": {
        borderWidth: 0,
      }
    },
    subtitle: {
      useHTML: true
    },
    "yAxis": [
      {
        gridLineColor: '#B9CFD7',
        gridLineWidth: 0.5,
        "title": {
          enabled: false
        },
        "labels": {
          useHTML: true,
          "format": "{value:,.0f} m<sup>2</sup>",
          "style": {
            "color": "#000000"
          }
        },
        "min": 0
      },
      {
        gridLineColor: '#B9CFD7',
        gridLineWidth: 0.5,
        "title": {
          enabled: false
        },
        "labels": {
          "format": "{value:,.0f}%",
          "style": {
            "color": "#000000"
          }
        },
        "min": 0,
        "opposite": true
      }
    ],
    "xAxis": {
      "tickInterval": 1
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      alignColumns: true,
      "itemMarginBottom": 5,
      //itemWidth: 200
    },
    "series": [
      {
        "color": "#b375ab",
        "index": 1,
        //legendIndex: 2,
        "type": "column",
        tooltip: {"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>'}
        },
      {
        "color": "#923f8d",
        "index": 3,
        //legendIndex: 4,
        "type": "line",
        "yAxis": 1,
        tooltip: {"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>'}
      },
      {
        "color": "#cd9c00",
        "index": 0,
        //legendIndex: 2,
        "type": "column",
        tooltip: {"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>'}
      },
      {
        "color": "#7f5f1a",
        "index": 2,
        //legendIndex: 3,
        "type": "line",
        "yAxis": 1,
        tooltip: {"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>'}
      }
    ]
  }
}());
