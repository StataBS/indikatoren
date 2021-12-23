(function () {
  return {
    chart: {
      type: "column",
      events: {
        load: function () {
          //add and move legend title (get it from series names)
          this.legend.title
            .attr({
              text:
              this.series[0].name.split(" (").slice(-1).toString().replace(')', '').substr(0, 1).toUpperCase() //Capitalize first letter
              + this.series[0].name.split(" (").slice(-1).toString().replace(')', '').substr(1)
              + ':<br>'
              + this.series[2].name.split(" (").slice(-1).toString().replace(')', '').substr(0, 1).toUpperCase() //Capitalize first letter
              + this.series[2].name.split(" (").slice(-1).toString().replace(')', '').substr(1) 
              + ':'
          })
            .translate(-90, 26);
        }
      },
    },
    plotOptions: {
      series: {
        stacking: "percent"
      }
    },
    yAxis: {
      tickAmount: 5,
      labels: {
        format: "{value:,.0f}%",
      }
    },
    tooltip: {
      shared: true,
      useHTML: true,
      followPointer: true,
      headerFormat: "<table>",
      pointFormat: '<tr><td><span style="color:{series.color}">\u25CF</span> {series.name}:</td>'
        + '<td style="text-align:right">&nbsp;<b>{point.y:,.0f} GWh</b></td>'
        + '<td style="text-align:right">&nbsp;({point.percentage:,.1f}%)</td></tr>',
      footerFormat: '<tr><td>Total: </td><td><b>{point.total:,.0f} GWh</b></td><td></td></tr></table>',
    },
    legend: {
      layout: "horizontal",
      verticalAlign: "top",
      align: "right",
      y: -30,
      x: 65,
      width: 250,
      itemWidth: 90,
      itemDistance: 0,
      itemStyle: {
        textOverflow: 'none',
        whiteSpace: 'nowrap',
      },
      labelFormatter: function () {
        //remove text after " ("
        return this.name.split(" (").slice(0, 1).toString()
        .replace("Andere Energieträger", "Andere");
      },
      title: {
        text: '-<br>-', //wird via chart.events.load bearbeitet
        style: {
          fontWeight: 'normal',
          lineHeight: 14
        }
      },
    },
    series: [
      {
        color: "#a8c3ca",
        legendIndex: 2
      },
      {
        color: "#ff8028",
        legendIndex: 1
      },
      {
        color: "#dc440e",
        legendIndex: 3
      },
      {
        color: "#246370",
        legendIndex: 4
      }
    ],
  };
}());
