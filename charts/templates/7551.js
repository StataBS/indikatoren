(function(){
  return {
    "yAxis": [
      {
        "labels": {
          "format": "{value:,.0f}",
          "style": {
            "color": "#000000"
          }
        },
        "min": 0,
       // tickAmount: 6,
        "max": undefined,
        "title": {
          enabled: false
        }
      },
      {
        "opposite": true,
        "title": {
          enabled: false
        },
        "min": 0,
       // tickAmount: 6,
        "gridLineWidth": 0,
        "labels": {
          "style": {
            "color": "#000000"
          }
        }
      }
    ],
    "xAxis": {
      type: "category",
  	  "tickInterval": 3
    },
    "series": [
      {
        type: "scatter",
        "marker": {
          enabled: true,
          "symbol": "circle"
        },     
        "color": "#662673",
        "yAxis": 0,
        legendIndex: 3,
        "tooltip": {
           headerFormat: '<span style="font-size: 10px">{point.key}<table><br/>',
          "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
        },
      },
      {
        "marker": {
          enabled: false,
          "symbol": "circle"
        },     
        "color": "#FFBB58",
        "yAxis": 0,
        legendIndex: 0,
        "tooltip": {
          "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
        },
      },
      {
        "marker": {
          enabled: false,
          "symbol": "circle"
        },     
        "color": "#008AC3",
        "yAxis": 0,
        legendIndex: 2,
        "tooltip": {
          "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
        },
      },
      {
        type: "scatter",
        "marker": {
          enabled: true,
          "symbol": "circle"
        },     
        "color": "#73B97C",
        "yAxis": 0,
        legendIndex: 1,
        "tooltip": {
          headerFormat: '<span style="font-size: 10px">{point.key}<table><br/>',
          "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
        },
      },
      {
        "marker": {
          enabled: false,
          "symbol": "circle"
        },     
        "color": "#68AB2B",
        "yAxis": 1,
        legendIndex: 3,
        "tooltip": {
          "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
        }
      }
    ],
    "legend": {
      "enabled": true,
      //"x": 25,
      //"y": 55,
      //"itemWidth": 500,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      itemDistance: 0,
      itemWidth: 200,
      width: 400,
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
  };
}());

