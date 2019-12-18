(function () {
  return {
    chart: {
      width: 665,
      spacingTop: 5,
    },
    "xAxis": {
      "tickInterval": 1,
      labels: {
        //step: 1,
        rotation: -45,
      },
    },
    "yAxis": {
      "min": 0,
      tickAmount: 5,
      "labels": {
        "format": "{value}%",
        x: -5
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'
    },
    "series": [
      { "color": "#b00000" }, /**/
      { "color": "#007a2f" }, /**/
      { "color": "#662673" }, /**/
      { "color": "#E7CEE2" }, /**/
      { "color": "#fabd24" }, /**/
      { "color": "#b9cfd7" }, /* */
    ],
    "legend": {
      "enabled": true,
//      "layout": "horizontal",
//      "verticalAlign": "top",
//      "align": "left",
      itemMarginBottom: 5,
      labelFormatter: function () {
        return this.name.replace('Ehemaliges', 'Ehem.<br>');
      }
    },
    "plotOptions": {
      "line": {
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    }
  }
}());