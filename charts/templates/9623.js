(function () {
  return {
    xAxis: {
      type: "category", /* muss "category" sein, sonst funktioniert es nicht richtig */
      tickPositioner: function () {
        var maxlabels = 10,
          ext = this.getExtremes(),
          i = Math.round(ext.max),
          interval = Math.round((i - ext.min)/maxlabels),
          pos = [i];
        while (i >= ext.min) pos.unshift(i = i - interval);
        return pos;
      }
    },
    yAxis: {
      labels: {
        format: "{value:,.0f}"
      }
    },
    /*tooltip: {
      shared: false,
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>'
    },*/
    tooltip: {
      formatter: function() {
        var index1 = this.series.index;
        var index2 = index1 + 3;
        var unit = ["GWh", "kWh pro CHF", "kWh pro Kopf"];
        var decimal = [0, 3, 0];
        //console.log(this.series.chart.series[index2].data);
        return '<b>' + Highcharts.numberFormat(this.y, 0) + '%</b> ('
          + Highcharts.numberFormat(this.series.chart.series[index2].data[this.x].y, decimal[index1]) + ' ' + unit[index1] + ')<br/>';
      },
      shared: false
  },
  series: [
    { color: "#9A86A6" },
    { color: "#BAA85A" },
    { color: "#8AB77D" },
    { color: "#9A86A6", visible: false, showInLegend: false },
    { color: "#BAA85A", visible: false, showInLegend: false },
    { color: "#8AB77D", visible: false, showInLegend: false }
  ],
    legend: {
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      //itemWidth: 150,
      itemMarginBottom: 5
    }
  }
}());
