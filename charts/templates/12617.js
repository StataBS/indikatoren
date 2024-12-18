(function () {
  return {
    chart: {
      type: "column",
      events: {
        load: function () {
          //set xAxis min in navigator
          this.xAxis[0].update({
            min: 54,
          });
          this.credits.element.onclick = function () {};

          //for top-left legends with no x defined: move legend to x position of first yAxis
          if (
            this["legend"]["options"]["align"] == "left" &&
            this["legend"]["options"]["verticalAlign"] == "top" &&
            this["legend"]["options"]["x"] == 0
          ) {
            this.update({
              legend: {
                x: this.yAxis[0].left - this.spacingBox.x - this.legend.padding,
              },
            });
          }
        },
      },
    },
    plotOptions: {
      series: {
        stacking: "percent",
        borderWidth: 0,
        groupPadding: 0,
        showInNavigator: true,
      },
    },
    xAxis: {
      type: "category",
      tickInterval: 1,
      labels: {
        rotation: -45,
      },
    },
    yAxis: {
      tickInterval: 25,
      labels: {
        format: "{value}%",
      },
      //"min": 0
    },
    tooltip: {
      pointFormat:
        '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
      shared: false,
    },
    legend: {
      enabled: true,
      layout: "horizontal",
      align: "left",
      verticalAlign: "top",
      itemMarginBottom: 5,
      alignColumns: false,
      labelFormatter: function () {
        return this.name.replace(" Haushalte", "");
      },
    },
    series: [
      {
        color: "#2f656b",
        index: 0,
      },
      {
        color: "#73b97c",
        index: 1,
      },
      {
        color: "#d7e8d2",
        index: 2,
      },
    ],
    navigator: {
      enabled: true,
      top: 330,
      series: {
        type: "column",
        stacking: "percent",
        pointRange: null,
      },
      xAxis: {
        //max: 2023,
        //tickInterval: 4,
        tickPositioner: function () {
          var interval = 6,
            ext = this.getExtremes(),
            i = ext.dataMax,
            pos = [i];
          while (i >= ext.dataMin) pos.unshift((i = i - interval));
          return pos;
        },
        labels: {
          //step: 1,
          rotation: 0,
          align: "center",
          y: 15,
          x: -15,
          style: {
            color: "#000000",
          },
          formatter: function () {
            // get year from chart axis label names
            //return this.chart.xAxis[0].names[this.value].substring(0, 4);
          },
        },
      },
    },
  };
})();
