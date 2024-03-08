(function(){
  return {
    xAxis: {
      "type": "category"
    },
    yAxis: {
      reversedStacks: true,
    },
    legend: {
      reversed: false,
      labelFormatter: function(){
        return this.name.replace("Keine ", " Keine<br/>").replace("Weiss ", "Weiss<br>");
      }
    },
    tooltip: {
      valueDecimals: 0
    },
    series: [
      { "color": "#6F6F6F" }, // grau
      { "color": "#C8C8C8" }, // grau
      {"color": "#007a2f"}, /*grün dunkel2*/
      {"color": "#44ab2b"}, /*grün mittel*/
      {"color": "#73ba7c"}, /*grün dunkel1*/
      {"color": "#d7e9d2"}, /*grün hell*/
      {"color": "#b9cfd7"}, /*blau hell */
      {"color": "#71a3b5"}, /*blau dunkel */
      {"color": "#ffbb58"}, /*orange hell */
      {"color": "#ff8028"}, /*orange dunkel */
      {"color": "#dc440e"}, /*rot hell */
      {"color": "#b00000"} /*rot dunkel */
    ]
  };
}());
