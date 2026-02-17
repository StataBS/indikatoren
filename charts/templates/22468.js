(function () {
  return {
    "chart": {
      //marginBottom: 150,
      "inverted": false,
    },
    "yAxis": {
      tickInterval: 25,
    },
    "xAxis": {
      "type": "category",
      min: 8,
      "labels": {
        useHTML: true,
        "formatter": function () {
          return this.value.split(":").slice(0, 1).toString();
        }
      }
    },
    legend:{
      reversed: true
    },
    "series": [
      { "color": "#007a2f", "index": 9, "legendIndex": 0 }, /*grün dunkel2*/
      { "color": "#44ab2b", "index": 8, "legendIndex": 1 }, /*grün mittel*/
      { "color": "#73ba7c", "index": 7, "legendIndex": 2 }, /*grün dunkel1*/
      { "color": "#d7e9d2", "index": 6, "legendIndex": 3 }, /*grün hell*/
      { "color": "#999999", "index": 5, "legendIndex": 4 }, /*blau hell */
    ],
    "tooltip": {
      "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b> ({point.percentage:,.1f}%)<br/>',
      "shared": false
    },
    exporting: {
      allowHTML: false,
    }
  };
}());

