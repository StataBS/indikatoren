(function () {
  return {
    chart: {
      marginRight: 20
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}%"
      }
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>'
    },
    "series": [
      {
        "color": "#FABD24" /* "#b375ab" Friedmatt*/
      },
      {
        "color": "#FF8028" /* "#689199" Kannenfeld*/
      },
      {
        "color": "#923F8D" /* "#662673" Landskron*/
      },
      {
        "color": "#689199" /* "#999" Lysbüchel*/
      },
      {
        "color": "#9E7C59" /*"#cd9c00" Pestalozzi*/
      },
      {
        "color": "#999", // Stadt Basel
        "dashStyle": "ShortDash",
      }
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
    },
    "plotOptions": {
      "line": {
        "connectNulls": true,
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    }
  }
}());
