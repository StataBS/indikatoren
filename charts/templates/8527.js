(function () {
  return {
    "plotOptions": {
      "series": {
        pointPadding: 100,
        borderWidth: 0,
        "pointWidth": 30,
        "stacking": "normal"
      }
    },
    "xAxis": {
      //"type": "category",
      "labels": {
        useHTML: true,
        "rotation": 0,
        "formatter": function () {
          return this.value.replace("Vorläufig Aufgenommene", "Vorläufig Aufgen.").
          replace("Asylsuchende","Asyl-suchende").
          replace(': ','<br>');
        }
      }
    },
    "yAxis": {
      tickInterval: 250,
      "labels": {
        "format": "{value:,.0f}",
      },
      "max": undefined
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      //"y": 40,
      "itemWidth": 120,
      "itemMarginBottom": 5,
      "itemStyle": {
        width: 300
      }
    },
    "series": [
      { "color": "#923f8d", "index": 3, "legendIndex": 0 }, /*grün dunkel2*/
      { "color": "#b375ab", "index": 2, "legendIndex": 2 }, /*grün mittel*/
      { "color": "#A8C3CA", "index": 1, "legendIndex": 1 },
      { "color": "#246370", "index": 0, "legendIndex": 3 },
    ],
    "chart": {
      "marginBottom": 55,
      //"marginTop": 75,
      "type": "column",
    }
  }
}());
