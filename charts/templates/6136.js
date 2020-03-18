(function(){
    return {
      chart: {
        inverted: true
      },
    "legend": {
        "layout": "vertical",
        "verticalAlign": "middle",
        "itemMarginBottom": 5,     
        "align": "right",
        "useHTML": false,
        "itemStyle": {
            "fontWeight": "normal"
        },
        "symbolRadius": 0,
        "labelFormatter": function () {
            return this.name.replace('/', '/<br/>')
            .replace('obligatorische', 'oblig.')
            .replace('Berufsvorbereitende', 'Berufsvorb.');
        }
    },
      xAxis: {
        labels: {
          formatter: function() {
            return this.value;
          }
        }
      },
      yAxis: {
        tickInterval: null, 
        reversedStacks: false
      },
      "series": [
      {"color": "#007a2f", "index": 0, "legendIndex":0}, /*grün dunkel2*/
      {"color": "#44ab2b", "index": 1, "legendIndex":1}, /*grün mittel*/
      {"color": "#73ba7c", "index": 2, "legendIndex":2}, /*grün dunkel1*/
      {"color": "#71a3b5", "index": 5, "legendIndex":3}, /*blau dunkel */
      {"color": "#ffbb58", "index": 6, "legendIndex":4}, /*orange hell */
      {"color": "#FF8028", "index": 8, "legendIndex":5}, /*rot hell */
      {"color": "#DC440E", "index": 9, "legendIndex":6} /*rot dunkel */
      ],
    }
}());
