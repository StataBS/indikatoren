(function () {
  return {
    plotOptions: {
      series: {
        stacking: "normal",
      }
    },
    xAxis: {
      type: "category"
    },
    yAxis: [
      {
        reversedStacks: false,
        min: 0,
        gridLineWidth: 0.5,
        gridLineColor: '#B9CFD7',
        lineColor: '#B9CFD7',
        title: {
          style: {
            color: "#000000",
            fontSize: null
          },
          text: null
        },
        labels: {
          format: "{value:,.0f}",
          style: {
            color: "#000000"
          }
        }
      },
      {
        opposite: true,
        min: 0,
        gridLineWidth: 0.5,
        gridLineColor: '#B9CFD7',
        lineColor: '#B9CFD7',
        title: {
          style: {
            color: "#000000",
            fontSize: null
          },
          text: null
        },
        labels: {
          style: {
            color: "#000000"
          },
          format: '{text}%'
        }
      }
    ],
    tooltip: {
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.percentage:,.1f}%)<br/>',
      footerFormat: 'Total: <b>{point.total:,.0f}</b><br/>'
    },
    legend: {
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      //alignColumns: false,
      //itemWidth: 300,
    },
    series: [
      {
        color: "#FF8028",
        legendIndex: 0
      },
      {
        color: "#A8C3CA",
        legendIndex: 1
      },
      {
        color: "#DC440E",
        legendIndex: 2
      },
      {
        color: "#689199",
        legendIndex: 3
      },
      {
        color: "#B00000",
        legendIndex: 4
      },
      {
        type: "line",
        yAxis: 1,
        marker: {
          enabled: false
        },
        color: "#246370",
        legendIndex: 5,
        tooltip: {
          pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>',
          footerFormat: ''
        }
      },
      /*{
        color: "#661200",
        legendIndex: 6
      }*/
    ],
    chart: {
      /*marginBottom: 75,
      marginTop: 75,*/
      type: "column"
    }
  }
}());
