(function () {
  return {
    "chart": {
      "type": "column",
      inverted: true,
    },
    "plotOptions": {
      "series": {
        "stacking": "percent"
      }
    },
    "xAxis": {
      reversed: false,
      "type": "category",
      labels: {
        formatter: function () {
          return this.axis.defaultLabelFormatter.call(this);
        },
      },
    },
    yAxis: {
      maxPadding: 0,
      reversedStacks: false,
      tickAmount: 6,
    },
    legend: {
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      reversed: false,
      itemMarginBottom: 2,
      itemDistance: 15
    },
    "series": [
      { "color": "#246370" },
      { "color": "#689199" },
      { "color": "#A8C3CA" },
      { "color": "#FABD24" },
      { "color": "#CD9C00" },
      { "color": "#7F5F1A" },
      { "color": "#FF8028" },
      { "color": "#DC440E" },
    ],
  };
}());
