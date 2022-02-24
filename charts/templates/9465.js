(function () {
  return {
    xAxis: {
      tickInterval: 1
    },
    yAxis: {
      min: null,
      labels: {
        format: "{value:,.0f}%"
      }
    },
    tooltip: {
      shared: false,
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
      useHTML: true
    },
    series: [
      { color: "#2F656B" },
      { color: "#8B2223",
        type: "line" }
      
    ],
    legend: {
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      itemMarginBottom: 5,
      align: "left",
    },
    plotOptions: {
      /*line: {
        marker: {
          symbol: null
        }-*/
      column: {
          minPointLength: 2
      }
    },
    chart: {      
      type: "column",
      inverted: false,
      spacingBottom: 40
    }
  }
}());
