(function () {
  return {
    "chart": {
      "type": "column",
      spacing: [5,2,5,2],
      width: 665
    },
    plotOptions: {
      "series": {
        "borderWidth": 0,
        "stacking": "percent",
        "groupPadding": 0
      }
    },
    "xAxis": {
      "type": "category",
      "tickInterval": 1,
      labels: {
        step: 1,
        rotation: -90,
        "formatter": function () {
          return this.value.replace("Kleinhüningen", "Kleinh.");
        },
      }
    },
    "yAxis": {
      "min": 0,
      "tickInterval": 25,
      "labels": {
        "format": "{value}%"
      }
    },
    "legend": {
      "enabled": true,
      "layout": "vertical",
      "verticalAlign": "middle",
      y: -28,
      "align": "right",
      "itemMarginBottom": 5,
      "itemStyle": {
        "width": 70,
        textOverflow: null
      },
      labelFormatter: function () {
        return this.name.replace("Verkehrs", "Verkehrs-<br/>")
      }
    },
    "series": [
      {
        "color": "#68ab2b",
        //	"legendIndex": 5
      },
      {
        "color": "#008AC3",
        //	"legendIndex": 4
      }, /* blau */
      {
        "color": "#C8C8C8",
        //	"legendIndex": 3
      }, /* grün */
      {
        "color": "#8A8A8A",
        //	"legendIndex": 2
      }, /* blau */
      {
        "color": "#474747",
        //	"legendIndex": 1
      }, /* grün */
    ],
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.2f} ha</b> ({point.percentage:.1f}%)<br/>',
    },

  }
}());