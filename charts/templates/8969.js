(function () {
    return {
      chart: {
        type: "column",
        spacingBottom: 45,
        inverted: false,
      },
      plotOptions: {
        series: {
          pointPadding: 0,
          borderWidth: 0,
        }
      },
      yAxis: {
        tickAmount: 6,
        labels: {
          "format": "{value:,.0f}%"
        }
      },
      series: [
        { color: "#007A2F" },
        { color: "#68AB2B" },
        { color: "#73B97C" },
        { color: "#246370" },
        { color: "#0F7399" },
        { color: "#689199" },
        { color: "#A8C3CA" }
      ],
      legend: {
        enabled: true,
        layout: "horizontal",
        verticalAlign: "top",
        align: "left",
        itemStyle: {
          fontWeight: "normal"
        }
      },
      tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
      },
      credits: {
        position: {
          y: -15
        },
        style: {
          width: 470
        }
      }
    }
  }());
  