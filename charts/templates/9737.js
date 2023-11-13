(function () {
  return {
    chart:{
      type: "line"
    },
    subtitle: {
      useHTML: true
    },
    legend: {
      enabled: true,
      align: "left",
      verticalAlign: "top",
      layout: "horizontal",
    },
    yAxis: {
      
    },
    xAxis: {
      tickInterval: 1,
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b> Einwohner/ha<br/>',
      shared: false
    },
    series: [
      {
        color: "#B00000",
      },
      {
        color: "#246370",
      },
      {
        color: "#008AC3",
      }
    ],
  };
}());

