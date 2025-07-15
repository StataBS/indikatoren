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
      tickAmount: 5,
      max: 1200,
      labels: {
        format: "{value:,.0f}"
      },
      reversedStacks: true
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f} GWh</b> ({point.percentage:,.1f}%)<br/>',
      footerFormat: 'Total: <b>{point.total:,.0f} GWh</b><br/>'
    },
    legend: {
      enabled: true,
      layout: "vertical",
      verticalAlign: "middle",
      align: "right",
      //alignColumns: false,
      //itemWidth: 300,
      labelFormatter: function () {
        return this.name.replace("schlamm ","schlamm<br>");
      },
    },
    series: [
      {
        color: "#D3E2E4"
      },
      {
        color: "#A8C3CA"
      },
      {
        color: "#689199"
      },
      {
        color: "#2F656B"
      },
      {
        color: "#D7E8D2"
      },
      {
        color: "#73B97C"
      },
      {
        color: "#68AB2B"
      }/*,
    {
      color:"#E7CEE2"
    }*/
    ],
    chart: {
      /*marginBottom: 75,
      marginTop: 75,*/
      type: "column",
      "width": 665
    }
  }
}());
