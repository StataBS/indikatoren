(function () {
  return {
    xAxis: {
      /*endOnTick: true,
      startOnTick: true,
      showFirstLabel: true,
      showLastLabel: true,
      tickInterval: 365 * 24 * 3600 * 1000,
      minTickInterval: 365 * 24 * 3600 * 1000,
      ordinal: false*/
      min: 1990,
      tickPositioner: function () {
        var interval = 4,
          ext = this.getExtremes(),
          i = ext.dataMax,
          pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      }
    },
    yAxis: [
      {
        opposite: false,
        labels: {
          format: "{value:,.0f}° C",
          style: {
            color: "#000000"
          }
        },
        min: 0,
        max: undefined,
        title: ""
      },
      {
       labels: {
          format: "{value:,.0f}",
          style: {
            "color": "#000000"
          }
        },
        min: 0,
        max: undefined,
        gridLineWidth: 0,
        opposite: true,
        title: ""
      }
    ],
    tooltip: {
      shared: false,
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
    },
    series: [
      {
        color: "#DC440E",
        lineWidth: 1
      },
      { color: "#B00000" },
      {
        color: "#689199",
        lineWidth: 1,
        yAxis: 1
      },
    ],
    legend: {
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      //"itemMarginBottom": 5,
      align: "left",
      itemwidth:600,
      itemStyle: {
        fontWeight: "normal",
        "textoverflow": null,
      }
    },
    plotOptions: {
      line: {
        marker: {
          enabled: false/*,
        "symbol": "circle",*/
        }
      }
    },
    exporting: {
      enabled: true
    }/*,
    data: {
      //convert year in first column to UTC date to be used by Highstock
      parsed: function (columns) {
        columns[0].forEach(function (v, i, a) {
          columns[0][i] = Date.UTC(columns[0][i]);
        });
      }
    },
    rangeSelector: {
      buttons:
        [
          {
            count: 30,
            type: 'year',
            text: '30 J'
          },
          {
            type: 'all',
            text: 'Alle J'
          }
        ],
      buttonSpacing: 15,
      inputEnabled: false,
      selected: 0,
      inputDateFormat: '%Y',
      inputEditDateFormat: '%Y'
    }*/
  }
}());