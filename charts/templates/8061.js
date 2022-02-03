(function () {
  return {
    "chart": {
      "type": "column"
    },
    "plotOptions": {
      column: {
        groupPadding: 0.04,
        pointPadding: 0.03,
        "stacking": "normal"
      }
    },
    "yAxis": {
      tickInterval: 500,
      //max: 4000,
      reversedStacks: false,
      "labels": {
        "format": "{value:,.0f}"
      },
    },
    "xAxis": {
      tickInterval: 1,
      "type": "category",
      labels: {
        step: 1,
        rotation: -45,
        "align": "right",
        formatter: function () {
          return this.value.replace('Kleinhüningen', 'Kleinh.');
        }
      }
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.percentage:.1f}%)<br/>',
      "footerFormat": 'Total: <b>{point.total:,.0f}</b>'
    },
    "legend": {
      "layout": "vertical",
      "align": "right",
      "verticalAlign": "middle",
      "itemMarginBottom": 5,
      reversed: true,
      labelFormatter: function () {
        return this.name.replace('Sonstige', 'Sonstige<br>')
        .replace('Selbstbewohnte', 'Selbst-<br>bewohnte<br>')
        .replace('Eigentümer', 'Eigentümer-<br>')
        .replace('Genossenschafts', 'Genossen-<br>schafts-<br>')
        .replace('Mietwohnungen', 'Miet-<br>wohnungen');
      }
    },
    "series": [
      {
        "color": "#ffbb58",
      },
      {
        "color": "#008AC3",
      },
      {
        "color": "#73B97C",
      },
      {
        "color": "#662673",
      }
    ]
  };
}());

