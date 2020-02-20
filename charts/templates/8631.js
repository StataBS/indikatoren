(function () {
  return {
    "chart": {
      "type": "column",
      spacingTop: 5
    },
    "plotOptions": {
      column: {
        groupPadding: 0.02,
        pointPadding: 0.1,
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
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      reversed: true,
      labelFormatter: function () {
        return this.name.replace(' ', '<br>')
        .replace('Genossenschafts', 'Genossen-<br>schafts-<br>')
          .replace('Selbstbewohnte', 'Selbst-<br>bewohnte<br>')
          .replace('Eigentümer', 'Eigentümer-<br>')
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

/*(function () {
  return {
    "plotOptions": {
      "series": {
        "stacking": "normal"
      }
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "xAxis": {
      tickInterval: 1,
      "type": "category"
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.percentage:.1f}%)<br/>',
      "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
      "shared": false
    },
    "legend": {
      "layout": "vertical",
      "verticalAlign": "middle",
      "itemMarginBottom": 5,
      "align": "right",
      "itemStyle": {
        "fontWeight": "normal"
      },
      labelFormatter: function () {
        var l = this.name.replace('Eigentümer', 'Eigentümer-<br>');
        l = l.replace(' ', '<br>');
        l = l.replace('Genossenschafts', 'Genossenschafts-<br>');
        return l;
      }
    },
    "series": [
      {
        "color": "#73B97C",
        "index": 1
      },
      {
        "color": "#008AC3",
        "index": 2
      },
      {
        "color": "#ffbb58",
        "index": 3
      },
      {
        "color": "#662673",
        "index": 0
      }
    ],
    "chart": {
      "zoomType": "y",
      "type": "column",
      spacing: [5,2,2,2]
    }
  };
}());*/