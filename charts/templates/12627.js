(function () {
  return {
    "yAxis": {
      tickInterval: 0.5,
      max: 2.5,
      "labels": {
        "format": "{value:,.1f}%",
      }
    },
    "xAxis": {
      "tickInterval": 2
    },
    "series": [
      {
        "marker": {
          "symbol": "circle",
          "enabled": false
        },
        "color": "#83522E"
      }
    ],
    "tooltip": {
      pointFormatter: function () {
        return '<span style="color:' + this.series.color + '">\u25CF</span> ' 
        + this.series.name.replace(' in %', '') 
        + ': <b>' + Highcharts.numberFormat(this.y, 2) + '%</b><br/>';
      }
    }
  }
}());
