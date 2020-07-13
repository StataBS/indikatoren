(function () {
    return {
      chart: {
        type: "column",
        marginBottom: 35,
        inverted: false,
      },
      plotOptions: {
        series: {
          pointPadding: 0,
          borderWidth: 0,
          minPointLength: 2
        }
      },
      data:{
          switchRowsAndColumns: true
      },
      xAxis: {
        labels: {
          rotation: 0,
          "formatter": function(){
            return this.value.replace("Basel-Landschaft","Basel-<br/>Landschaft")
          }, 
        }
      },
      yAxis: {
        min: -10000,
        tickAmount: 7,
        labels: {
          "format": "{value:,.0f}",
        }
      },
      series: [
        { color: "#246370" },
        { color: "#0F7399" },
        { color: "#689199" },
        { color: "#A8C3CA" },
        { color: "#D3E2E4" }
      ],
      legend: {
        itemDistance: 5,
        enabled: true,
        layout: "horizontal",
        verticalAlign: "top",
        align: "left",
        itemStyle: {
          fontWeight: "normal"
        }
      },
      tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
      },
    }
  }());
  