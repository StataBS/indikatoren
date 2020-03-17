(function () {
  return {
    chart: {
      zoomType: "x"
    },
    /*    "plotOptions": {
          "series": {
            pointPadding: 0.06,
            groupPadding: 0.1,
          }
        },
    */
    subtitle: {
      useHTML: true
    },
    legend: {
      enabled: true,
      align: "left",
      verticalAlign: "top",
      labelFormatter: function () {
        return this.name.replace(' (Index)', '');
      }
    },
    yAxis: {
      // opposite: true,
      //tickAmount: 6,
      //min: 99.5,
      //max: 101,
      tickInterval: .1,
      labels: {
        format: "{value:,.1f}",
        style: {
          color: "#000000"
        }
      },
      plotLines: [{
        value: 100,
        color: '#B9CFD7',
        width: 2
      }],
      gridLineColor: '#B9CFD7',
      gridLineWidth: 0.5,
      "title": {
        enabled: false
      }
    },
    /*
    {
      tickAmount: 6,
      labels: {
        format: "{value:,.0f}",
      },
      plotLines: [{
        value: 0,
        color: '#B9CFD7',
        width: 2
      }],
      gridLineColor: '#B9CFD7',
      gridLineWidth: 0.5,
      "title": {
        enabled: false
      },
      labels: {
        style: {
          color: "#000000"
        }
      }
    },
  ],*/
    xAxis: {
      tickInterval: 1,
    },
    data: {
      seriesMapping: [
        //{ x: 0, y: 8 },
        //{ x: 0, y: 9 },
        { x: 0, y: 4 },
        { x: 0, y: 5 },
      ]
    },
    series: [
      /*      {
              color: "#8b2223",
              type: "column"
            },
            {
              color: "#DC440E",
              type: "column"
            },
      */
      {
        color: "#7b1213",
        type: "line",
        marker: {
          enabled: false
        },
        // yAxis: 1
      },
      {
        color: "#aC140E",
        type: "line",
        marker: {
          enabled: false
        },
        //yAxis: 1
      }
    ],
    tooltip: {
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
      shared: false
    },
  };
}());

