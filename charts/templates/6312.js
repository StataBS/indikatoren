(function () {
  return {
    plotOptions: {
      series: {
        dataLabels: {
          style: {
            fontSize: "10px"
          }
        },
        stacking: "normal",
      }
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      tickAmount: 6,
      labels: {
        format: "{value:,.0f}"
      },
      reversedStacks: false
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f} GWh</b> ({point.percentage:,.1f}%)<br/>',
      footerFormat: 'Total: <b>{point.total:,.1f} GWh</b><br/>'
    },
    legend: {
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      itemWidth: 90,
      //width: 220,
      itemStyle: {
        textOverflow: "none",
        whiteSpace: "nowrap"
      }
      //alignColumns: false,
      //itemWidth: 300,
    },
    series: [
        {
          color:  "#FFDA80"
        },
        {
          color:  "#FABD24"
        },
        {
          color: "#CD9C00"
        }/*,
      {
        color: "#A8C3CA",
        legendIndex: 0
      },
      {
        color: "#689199",
        legendIndex: 1
      },
      {
        color: "#246370",
        legendIndex: 2
      },
      {
        color: "#083038",
        legendIndex: 3
      }*/
    ],
    chart: {
      /*marginBottom: 75,
      marginTop: 75,*/
      type: "column"
    }
  }
}());
