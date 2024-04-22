(function () {
  return {
    "chart": {
      "marginBottom": 75,
      //"marginTop": 75,
      "type": "column",
      "inverted": true,
      events: {
        load: function () {
          this.credits.element.onclick = function () { };

          //for top-left legends with no x defined: move legend to x position of first yAxis
          if (this['legend']['options']['align'] == 'left' && this['legend']['options']['verticalAlign'] == 'top' && this['legend']['options']['x'] == 0) {
            this.update(
              {
                legend: {
                  x: this.yAxis[0].left - this.spacingBox.x - this.legend.padding
                }
              }
            );
          }

          //set series in legend to visible=false if a series has no values (sum==0)
          this.series.forEach(function (s, i) {
            var sum = 0;
            s.data.forEach(function (p, j) {
              sum += p.y;
            });
            if (sum == 0) s.hide();
          });
        }
      },
    },
    "plotOptions": {
      "series": {
        pointPadding: 100,
        minPointLength: 1,
        borderWidth: 0,
        "pointWidth": 20,
        "stacking": "normal"
      }
    },
    "xAxis": {
      "type": "category",
      "tickInterval": 1, 

    },
    yAxis: {
			max: 800
		},
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      itemDistance: 1,
      "verticalAlign": "top",
      "itemMarginBottom": 1,
      "align": "left",
    },
    "series": [
      { "color": "#B00000", index: 10, legendIndex: 0 }, /*Schweiz*/
      { "color": "#672773", index: 9, legendIndex: 1 }, /*Deutschland*/
      { "color": "#007a2f", index: 8, legendIndex: 2 }, /*Italien*/
      { "color": "#fabd24", index: 7, legendIndex: 3 }, /*Türkei*/
      { "color": "#b475ab", index: 6, legendIndex: 4 }, /*EU-17 & EFTA*/
      { "color": "#71a3b5", index: 5, legendIndex: 5 }, /*EU-Ost */
      { "color": "#b9cfd7", index: 4, legendIndex: 6 }, /*Balkan*/
      { "color": "#ff8028", index: 3, legendIndex: 7 }, /*Mittel- & Südamerika */
      { "color": "#73ba7c", index: 2, legendIndex: 8 }, /*Arabische Länder */
      { "color": "#9f7c5a", index: 1, legendIndex: 9 }, /*Afrikanische Länder*/
      { "color": "#999999", index: 0, legendIndex: 10 }, /*Übrige Länder*/
    ],
  }
}());
