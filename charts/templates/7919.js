(function () {
  return {
    subtitle: {
      useHTML: true
    },
    xAxis: {
      tickInterval: 1
    },
    "yAxis": {
      tickInterval: 10,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "shared": false,
      useHTML: true,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f} m<sup>2</sup></b><br/>'
    },
    "series": [
      {
        "color": "#999",
        "dashStyle": "ShortDash",
        legendIndex: 2
      },
      { "color": "#cd9c00" },
      { "color": "#b375ab" }
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left"
    }
  }
}());
