(function () {
  return {
    "chart": {
      marginRight: 50,
      marginLeft: 130,
      "type": "column",
      "inverted": true
    },
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0
      }
    },
    "xAxis": {
      "type": "category",
      "labels": {
        align: "left",
        x: -110,
        "formatter": function () {
          return this.value.replace("/", "<br/>")
            .replace("und", "und<br>")
            .replace("vermittlung,", "vermittlung,<br>")
        },
        style: {
          textOverflow: 'none' // prevents ellipsis
        }
      },
    },
    "yAxis": {
      //tickInterval: 250,
      "labels": {
        "format": "{value:,.0f}",
        style: {
          textOverflow: 'none' // prevents ellipsis
        }
      }
    },
    "series": [
      { "color": "#A8C3CA" },
      { "color": "#689199" },
      { "color": "#246370" },
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
    },
    tooltip: {
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    }
  }
}());

