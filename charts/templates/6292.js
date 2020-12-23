(function(){
    return {
      chart: {
        inverted: true,
        width: 665
      },
      "legend": {
        "enabled": true,
        "layout": "vertical",
        "verticalAlign": "middle",
        "align": "right",
    	  //"y": 40,
    	  //itemWidth: 90, 
        "itemStyle": {
          "fontWeight": "normal"
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
