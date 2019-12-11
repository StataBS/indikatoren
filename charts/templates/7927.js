(function () {
  return {
    "chart": {
      //marginRight: 50,
      marginLeft: 170,
      //height: 650,
      width: 665,
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
        align: "right",
        x: -10,
        "formatter": function () {
          return this.value.replace("/", "<br/>")
            .replace("Unternehmensverwaltung und -führung, Unternehmensberatung", "Unternehmensverwaltung und<br/>-führung, Unternehmensberatung")
        },
        style: {
          textOverflow: 'none' // prevents ellipsis
        }
      },
    },
    "yAxis": {
      "labels": {
        y: 15,
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
      "itemStyle": {
        "fontWeight": "normal"
      },
    },
    tooltip: {
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
      shared: false
    }
  }
}());

