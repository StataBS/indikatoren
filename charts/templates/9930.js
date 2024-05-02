(function () {
  return {
    "chart": {
      "type": "column",
      spacingBottom: 45,
    },
    "plotOptions": {
      "series": {
        "pointWidth": 25,
        "dataLabels": {
          "style": {
            "fontSize": 10
          }
        },
        "stacking": "normal"
      }
    },
    "xAxis": {
      "type": "category"
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}"
      },
      "reversedStacks": false
    },

    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
      "shared": false
    },
    /*"tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
      "footerFormat": 'Total Tagesferien: <b>{point.total:,.0f}</b>',
    },*/
    legend: {
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      //alignColumns: false,
      //itemWidth: 300,
      itemStyle: {
        fontWeight: "normal"
      }
    },
    "series": [
      { "color": "#73B97C", index: 0, legendIndex: 0 }, /**/
      { "color": "#007A2F", index: 1, legendIndex: 1 }, /**/
      { "color": "#923F8D", "type": "line", legendIndex: 2 }, /**/

    ],
  }
}());