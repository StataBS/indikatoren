(function () {
  return {
    "yAxis": [{
      tickAmount: 5,
      min: 0,
      title: {
        text: null,
        "color": "#000000",
        "fontSize": null
      },
      "labels": {
        "format": "{value:,.0f}",
        style: {
          color: "black",
        },
      },

    },
    {
      tickAmount: 5,
      min: 0,
      "title": {
        "style": {
          "color": "#000000",
          "fontSize": null
        },
        "text": null
      },
      "labels": {
        "format": "{value:,.0f}",
        style: {
          color: "black",
        },
      },
      "opposite": true
    }
    ],
    "xAxis": {
      "tickInterval": 1,
      "labels": {
        step: 1,
        "rotation": -45,
      }
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      itemWidth: 140,
      "itemMarginBottom": 5,
      "itemStyle": {
        "fontWeight": "normal",
        textOverflow: 'nowrap',
        whiteSpace: "nowrap"
      }
    },
    "series": [
      {
        "color": "#FFDA80", // 
        "index": 0,
        "type": "column",
        "yAxis": 0,
        pointPadding: 0,
        borderWidth: 0,
        legendIndex: 1,
        "tooltip": {
          "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
        },
      },
      {
        "color": "#C8C8C8", // 
        "index": 1,
        "type": "line",
        "yAxis": 1,
        "marker": {
          "enabled": false
        },
        legendIndex: 2,
        "tooltip": {
          "headerFormat": '',
          "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
        },
      },
      {
        "color": "#7F5F1A", // 
        "index": 0,
        "type": "column",
        "yAxis": 0,
        pointPadding: 0,
        borderWidth: 0,
        //"pointWidth": "8",
        legendIndex: 3,
        "tooltip": {
          "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
        },

      },
      {
        "color": "#6F6F6F", // 
        "index": 1,
        "type": "line",
        "yAxis": 1,
        "legendIndex": 3,
        "tooltip": {
          "headerFormat": '',
          "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
        },
        "marker": {
          "enabled": false
        },
      }
    ],
    "tooltip": {
      //"shared": true
    },
    "chart": {
      "alignTicks": false
    }
  };
}());