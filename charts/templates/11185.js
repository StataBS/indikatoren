(function () {
  return {
    chart: {
      type: "scatter",
      zoomType: 'xy',
      events: {
        load: function () {
          this.series[0].points[10].update({
            marker: {
              symbol: 'square',
              radius: 6,
              enabled: true,
              states: {
                hover: {
                  enabled: true,
                  symbol: 'square',
                }
              },
              fillColor: 'black',
              // lineColor: 'black',
            },
            dataLabels:{
//              align: "right",
              verticalAlign: "bottom"
            },
          });

        }
      }
    },
    yAxis: {
      tickAmount: 7,
      labels: {
        formatter: function () {
          return Highcharts.numberFormat((this.value), 1);
        },
      },
      min: 0,
      title: {
        text: "CMI",
        style: {
          color: "black"
        },
      },

    },
    xAxis: {
      title: {
        text: "PCCL",
        style: {
          color: "black"
        },
      },
      labels: {
        formatter: function () {
          return Highcharts.numberFormat((this.value), 1);
        },
        style: {
          color: "black"
        }
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true,
      gridLineWidth: 1,
      tickAmount: 6,
      min: 0,
      style: {
        color: "black",
      }
    },
    legend: {
      itemDistance: 8,
      enabled: false,
      layout: "horizontal",
      verticalAlign: "top",
      itemMarginBottom: 5,
      align: "left"
    },
    data: {
      seriesMapping: [
        {
          name: 0,
          name_short: 1,
          x: 3,
          y: 2
          /*, color: 4 */
        }
      ],
    },
    tooltip: {
      useHTML: true,
      formatter: function () {
        return '<b>' + this.point.name + '</b> <br/><br/> CMI: ' + Highcharts.numberFormat(this.y, 2) + '<br/> PCCL: ' + Highcharts.numberFormat(this.x, 2);
      }
    },
    plotOptions: {
      scatter: {
        marker: {
          radius: 5,
          enabled: true,
          symbol: 'circle',
          states: {
            hover: {
              enabled: true
            }
          },
        },
      },
      series: {
        color: '#5284BB',
        dataLabels: {
          enabled: true,
          align: 'left',
          verticalAlign: 'top',
          allowOverlap: true,
          crop: false,
          format: '{point.name_short}',
          style: {
            fontWeight: 'normal',
            fontSize: '7pt',
            color: 'black',
            textOverflow: 'clip',
            textOutline: 'none',
          }
        }
      },
    },
  };
})();