(function () {
  return {
    "chart": {
      "type": "column"
    },
    "plotOptions": {
      "series": {
        "stacking": "percent",
        groupPadding: 0.02
      }
    },
    "xAxis": {
      "type": "category",
      //min: 30,
      tickInterval: 1,
      labels: {
        step: 1,
        rotation: -45,
        formatter: function () {
          return this.value.replace('Kleinhüningen', 'Kleinh.');
        }
      }
    },
    "yAxis": {
      "tickInterval": 10,
      "labels": {
        "format": "{value}%"
      }
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.percentage:.1f}%)<br/>'
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      //"itemMarginBottom": 5,
      "itemWidth": 205,
      itemDistance: 4,
      "align": "left",
      labelFormatter: function () {
        return this.name.replace('Andere, ohne oder unbek. Zugeh.', 'Andere/ohne/unbekannt');
      }
    },
    "series": [
      { "color": "#71a3b5", index: 6, legendIndex: 1 },
      { "color": "#672773", index: 5, legendIndex: 2 },
      { "color": "#ff8028", index: 4, legendIndex: 3 },
      { "color": "#73ba7c", index: 3, legendIndex: 4 },
      { "color": "#E7CEE2", index: 2, legendIndex: 5 },
      /*{"color": "#999999", index: 1, legendIndex: 6}, */
    ]
  }
}());

