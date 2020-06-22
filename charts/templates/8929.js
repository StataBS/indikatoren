
(function () {
  return {
    "chart": {
      "type": "column",
      //"inverted": true,
      //marginLeft: 70,
      //width: 665,
    },
    "plotOptions": {
      "series": {
        //pointPadding: 0,
        borderWidth: 0,
        pointWidth: 15,
        "stacking": "normal"
      }
    },
    "xAxis": {
      max: 6,
      "labels": {
        //align: "right",
        y: 10,
      },
      "type": "category",
      "tickInterval": 1
    },
    "yAxis": {
      max: 100,
      tickInterval: 20,
      "labels": {
        "format": "{value:,.0f}%",
      },
    },
    "legend": {
      "enabled": true,
      "layout": "vertical",
      "verticalAlign": "middle",
      "align": "right",
      reversed: true,
      y: -15,
      itemMarginBottom: 5,
      labelFormatter: function () {
        return this.name.replace('/', '/<br>').replace('weiter', 'weiter-<br>').replace(' Grund', '<br>Grund');
     }    
    },
    "series": [
      { "color": "#083038", "index": 5, "legendIndex": 0 }, /*gelb*/
      { "color": "#246370", "index": 4, "legendIndex": 1 }, /*blau1*/
      { "color": "#689199", "index": 3, "legendIndex": 2 }, /*blau2*/
      { "color": "#A8C3CA", "index": 2, "legendIndex": 3 }, /*blau3*/
      { "color": "#D3E2E4", "index": 1, "legendIndex": 4 }, /*blau4*/
      { "color": "#FABD24", "index": 0, "legendIndex": 5 }, /*blau5*/
    ],
  }
}());
