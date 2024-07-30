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
      labelFormatter: function () {
        return this.name.replace('potentieller', 'pot.');  //holt z.B. '2015' aus '2015 Wöchentlich'
      },
    },
    yAxis: {
      tickInterval: 25,
      labels:{
        x: -7
      },
    },
    xAxis: {
      tickPositioner: function () {
        var interval = 3,
          ext = this.getExtremes(),
          i = ext.dataMax,
          pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b> Einwohner/ha<br/>',
      shared: false
    },
    series: [
      {
        color: "#B00000", legendIndex: 1
      },
      {
        color: "#246370", legendIndex: 0
      },
      {
        color: "#008AC3", legendIndex: 2
      }
    ],
  };
}());

