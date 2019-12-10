(function () {
  return {
    "chart": {
      "type": "column"
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
        rotation: -90
      }
    },
    "yAxis": {
      "min": 0,
      "labels": {
        "format": "{value}%"
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.2f} ha</b> ({point.percentage:.1f}%)<br/>',
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
    "legend": {
      "enabled": true,
      //"itemWidth": 100,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 2,
      "align": "left"
    }
  }
}());