(function () {
  return {
    chart: {
      marginTop: 5,
    },
    legend: {
      itemMarginBottom: 4,
      verticalAlign: "top",
      y: 10,
      labelFormatter: function () {
        return this.name.replace('Weiss ', 'Weiss<br>').replace('Keine ', 'Keine<br>');
      }    
    },
    yAxis: {
      reversedStacks: true,
      labels: {
        x: -5
      }
    },
    xAxis: {
      type: "category",
      labels: {
        formatter: function () {
          return this.value.replace('(', '<br>(').replace('.', ',');
        },
        style: {
          fontSize: "9px",
        }  
      },
    },
    series: [
      { "color": "#007a2f", "index": 9 }, /*grün dunkel2*/
      { "color": "#44ab2b", "index": 8 }, /*grün mittel*/
      { "color": "#73ba7c", "index": 7 }, /*grün dunkel1*/
      { "color": "#d7e9d2", "index": 6 }, /*grün hell*/
      { "color": "#b9cfd7", "index": 5 }, /*blau hell */
      { "color": "#71a3b5", "index": 4 }, /*blau dunkel */
      { "color": "#ffbb58", "index": 3 }, /*orange hell */
      { "color": "#ff8028", "index": 2 }, /*orange dunkel */
      { "color": "#dc440e", "index": 1 }, /*rot hell */
      { "color": "#b00000", "index": 0 } /*rot dunkel */
    ]
  };
}());
