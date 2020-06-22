(function () {
  return {
    "chart": {
      width: 665,
      marginLeft: 190,
      "inverted": true,
    },
    plotOptions: {
      column: {
        groupPadding: 0,
      }
    },
    "yAxis": {
      tickInterval: 25,
      labels: {
        y: 15
      }
    },
    "xAxis": {
      "type": "category",
      "labels": {
        useHTML: true,
        align: "left",
        x: -180,
        /*"formatter": function () {
          return this.value.replace("  ", "<br/>");
        }*/
        formatter: function () {
          //console.log(this);
          return this.value;
          return (this.value.slice(0, 4) == '2015') ? this.value.slice(0, 4) : this.value.slice(6) + ' ' + this.value.slice(0, 4);
        }
      }
    },
    "series": [
      { "color": "#007a2f", "index": 9, "legendIndex": 0 }, /*grün dunkel2*/
      { "color": "#44ab2b", "index": 8, "legendIndex": 1 }, /*grün mittel*/
      { "color": "#73ba7c", "index": 7, "legendIndex": 2 }, /*grün dunkel1*/
      { "color": "#d7e9d2", "index": 6, "legendIndex": 3 }, /*grün hell*/
      { "color": "#999999", "index": 5, "legendIndex": 4 }, /*blau hell */
    ],
    tooltip: {
      valueDecimals: 1,
    },
    legend: {
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      itemMarginBottom: 1,
    },
    exporting: {
      allowHTML: false,
    }
  };
}());
