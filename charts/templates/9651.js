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
      min: 0,
      tickAmount: 4
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
      tickAmount: 4,
      opposite: true
    }
    ],
    series: [
      {
        color: "#FF8028",
        type: "column",
      }, 
      {
        color: "#DC440E",
        type: "column"
      },
      {
        color: "#B00000",
        type: "column"
      },
      {
        color: "#67401E",
        type: "column"
      },
      /*{
        color: "#CD9C00",
        type: "column"
      },*/
      {
        color: "#000000",
        type: "line",
        yAxis: 1,
        marker: {
          enabled: false
        },
        tooltip: {
          pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'/*,
          footerFormat: 'Total Emissionen: <b>{point.total:,.0f}</b> Tonnen',*/
        }
      }
    ],
    tooltip: {
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> Tonnen ({point.percentage:.1f}%)<br/>', "footerFormat": 'Total Emissionen: <b>{point.total:,.0f}</b> Tonnen',
      shared: true,
      useHTML: true
      //outside: true
    },

    legend: {
      useHTML: true,
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      itemMarginBottom: 5,
      align: "left",
      //itemWidth: 150,
      //width: 300,
      itemStyle: {
        fontWeight: "normal",
        textOverflow: "none",
        whiteSpace: "nowrap"

      }
    },
    chart: {
      //"marginBottom": 75,
      //"marginTop": 75,
      type: "column",
      width: 665
    }
  };
}());
