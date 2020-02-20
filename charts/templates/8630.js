(function () {
  return {
    "chart": {
      "type": "column",
      spacingTop: 5
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
      max: 4000,
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
      "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
    },
    "legend": {
      /*
            "layout": "vertical",
            "verticalAlign": "middle",
            "align": "right",
      */
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemMarginBottom": 5,
      reversed: false,
      labelFormatter: function () {
        return this.name.replace('Zimmer u.m.', 'Zim. u.m.');
      }
    },
    "series": [
      {
        "color": "#DC440E",
      },
      {
        "color": "#923F8D",
      },
      {
        "color": "#68AB2B",
      },
      {
        "color": "#689199",
      },
      {
        "color": "#CD9C00",
      },
      {
        "color": "#B00000",
      }
    ],
  };
}());