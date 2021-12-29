(function () {
  return {
    title: {
      useHTML: true
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        pointWidth: 30,
        dataLabels: {
          style: {
            fontSize: "10px"
          }
        },
        stacking: "true"
      }
    },
    xAxis: {
      type: "category",
    },
    yAxis: [{
      title: {
        text: null
      },
      labels: {
        format: "{value:,.0f}",
        style: {
          color: "black"
        },
      },
      min: 0
    },
    {
      title: {
        text: null
      },
      labels: {
        format: "{value:,.0f}",
        style: {
          color: "black"
        },
      },
      min: 0,
      opposite: true
    }
    ],
    series: [
      {
        color: "#2F656B",
        type: "column",
      }, 
      {
        color: "#8B2223",
        type: "column"
      },
      {
        color: "#83522E",
        type: "column"
      },
      {
        color: "#9A86A6",
        type: "column"
      },

      {
        color: "#000000",
        type: "line",
        yAxis: 1,
        marker: {
          enabled: false
        },
        tooltip: {
          pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
        },
      }
    ],
    tooltip: {
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>', "footerFormat": 'Total CO<sub>2</sub> Emissionen: <b>{point.total:,.0f}</b> Tonnen pro Kopf',
      shared: true,
      useHTML: true,
      outside: true
    },

    legend: {
      useHTML: true,
      enabled: true,
      //"y": 35,
      layout: "horizontal",
      verticalAlign: "top",
      itemMarginBottom: 5,
      align: "left",
      itemStyle: {
        fontWeight: "normal"
      }
    },
    chart: {
      //"marginBottom": 75,
      //"marginTop": 75,
      type: "column"
    }
  };
}());
