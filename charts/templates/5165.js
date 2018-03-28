(function(){
    return {
      xAxis: {
        "type": "category"
      },
      yAxis: {
        reversedStacks: true,
      },
      legend: {
        reversed: false
      },
      tooltip: {
        valueDecimals: 0
      },
      series: [
        {"color": "#007a2f", index:0}, /*grün dunkel2*/
        {"color": "#44ab2b", index:1}, /*grün mittel*/
        {"color": "#73ba7c", index:2}, /*grün dunkel1*/
        {"color": "#d7e9d2", index:3}, /*grün hell*/
        {"color": "#b9cfd7", index:4}, /*blau hell */
        {"color": "#71a3b5", index:5}, /*blau dunkel */
        {"color": "#ffbb58", index:6}, /*orange hell */
        {"color": "#ff8028", index:7}, /*orange dunkel */
        {"color": "#dc440e", index:8}, /*rot hell */
        {"color": "#b00000", index:9} /*rot dunkel */
      ]
    };
}());
