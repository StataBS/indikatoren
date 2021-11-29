(function () {
  return {
    "chart": {
      "type": "column",
      "marginBottom": 135,
    },
    "plotOptions": {
      "series": {
        stacking: "normal",
        pointPadding: 100,
        pointWidth: 20
      }
    },
    "xAxis": {
      min: 0,
      "tickInterval": 1
    },
    "yAxis": {
      max: 100,
      "labels": {
        "format": "{value:,.0f}%",
      },
    },
    "legend": {
      "layout": "vertical",
      "verticalAlign": "middle",
      "align": "right",
      reversed: true,
      itemMarginBottom: 5,
      labelFormatter: function () {
        return this.name.replace(" ", "<br/>").replace("-", "-<br/>").replace("/unbekannt", "/<br/>unbekannt");
      },
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
      "shared": false
    },
    "series": [
      { "color": "#71a3b5", index: 5, legendIndex: 1 },
      { "color": "#672773", index: 4, legendIndex: 2 },
      { "color": "#ff8028", index: 3, legendIndex: 3 },
      { "color": "#73ba7c", index: 2, legendIndex: 4 },
      { "color": "#E7CEE2", index: 1, legendIndex: 5 },
    ],
  }
}());
