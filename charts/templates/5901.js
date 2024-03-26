(function () {
  return {
    "yAxis": {
      min:null
    },
    "xAxis": {
      "tickInterval": 1
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemMarginBottom": 5,
      /*itemWidth: 140,
      "itemStyle": {
        "fontWeight": "normal",
        textOverflow: 'nowrap',
        whiteSpace: "nowrap"
      }*/
    },
    "series": [
      {
        visible: false,
        showInLegend: false,
        "color": "#FFBB58", // Bevölkerung
        //"index": 0,
        zIndex: 0,
        "type": "column",
        pointPadding: 0,
        borderWidth: 0,
        legendIndex: 1,
        "tooltip": {
          "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
        },
      },
      {
        "color": "#B00000", // Bevölkerung indexiert
        //"index": 1,
        zIndex: 1,
        "type": "line",
//        "yAxis": 1,
        "marker": {
          "enabled": false
        },
        legendIndex: 2,
        "tooltip": {
          "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
        },
      },
      {
        visible: false,
        showInLegend: false,
        "color": "#A8C3CA", // Beschäftigte
        //"index": 0,
        zIndex: 0,
        "type": "column",
        pointPadding: 0,
        borderWidth: 0,
        //"pointWidth": "8",
        legendIndex: 3,
        "tooltip": {
          "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
        },

      },
      {
        "color": "#246370", // Beschäftigte indexiert
        //"index": 1,
        zIndex: 2,
        "type": "line",
//        "yAxis": 1,
        "legendIndex": 3,
        "tooltip": {
          "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
        },
        "marker": {
          "enabled": false,
          radius: 5
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