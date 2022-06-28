(function () {
  return {
    plotOptions: {
      series: {
        "stacking": "percent",
        pointPadding: 0.2,
        borderWidth: 0,
      }
    },
    "yAxis": {
      tickAmount: 6,
      labels:{
      "formatter": function(){
        return Highcharts.numberFormat((this.value),0)+'%'; 
      }
      }, 
    },

    "xAxis": {
      "type": "category",
      "labels": {
        "formatter": function () {
          return this.value
            .replace("Basel-Stadt", "BS")
            .replace("Basel-Landschaft", "BL")
            .replace("Aargau", "AG")
            .replace("Zürich", "ZH")
            .replace("Schweiz", "CH");
        },
      }
    },
    "series": [
      { "color": "#083038", index: 3, legendIndex: 0 }, /* */
      { "color": "#2F656B", index: 2, legendIndex: 1 }, /* */
      { "color": "#689199", index: 1, legendIndex: 2 },  /* */
      { "color": "#D3E2E4", index: 0, legendIndex: 3 },  /* */
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      itemDistance: 20,
      "verticalAlign": "top",
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "data": {
      "switchRowsAndColumns": true
    },
    "chart": {
      type: "column",
      "inverted": false,
    },
    "tooltip": {
      "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> ({point.percentage:.1f}%)<br/>',
    },
  }
}());
