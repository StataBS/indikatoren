(function () {
  return {
    xAxis: {
      tickInterval: 1
    },
    yAxis: {
      min: null,
      labels: {
        format: "{value:,.0f}"
      }
    },
    tooltip: {
      shared: false,
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f} m<sup>2</sup></b><br/>',
      useHTML: true
    },
    series: [
      { color: "#2F656B", legendIndex: 0 },
      { color: "#2F656B", dashStyle: 'ShortDot', legendIndex: 6 },
      { color: "#8B2223", legendIndex: 1 }, 
      { color: "#8B2223", dashStyle: 'ShortDot', legendIndex: 7 },
      { color: "#9A86A6", legendIndex: 2 }, 
      { color: "#9A86A6", dashStyle: 'ShortDot', legendIndex: 8 },
      { color: "#BAA85A", legendIndex: 3 }, 
      { color: "#BAA85A", dashStyle: 'ShortDot', legendIndex: 9 },
      { color: "#71A3B5", legendIndex: 4 }, 
      { color: "#71A3B5", dashStyle: 'ShortDot', legendIndex: 10 },
      { color: "#8AB77D", legendIndex: 5 }, 
      { color: "#8AB77D", dashStyle: 'ShortDot', legendIndex: 11 }
      
    ],
    chart: {
      events: {
        load: function () {
          //add and move legend title (get it from series names)
          this.legend.title
            .attr({
              text:
                this.series[0].name.split(" ").slice(2).toString() //holt 'Wöchentlich' aus '2015 Wöchentlich'
                + ':<br>'
                + this.series[1].name.split(" ").slice(2).toString() //holt 'Kumuliert' aus '2020 Kumuliert'
                /*+ ' (rechte Skala):'*/
            })
            .translate(-70, 8); //move -140 to the left and 8 down
        }
      }
    },
    legend: {
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      itemMarginBottom: 5,
      align: "right",
      title: {
        text: ' ', //muss gesetzt werden, wird via chart.events.load bearbeitet
        style: {
          fontWeight: 'normal',
          lineHeight: 18
        }
      },
      labelFormatter: function () {
        return this.name.split(" ").slice(0,1).toString() + " " + this.name.split(" ").slice(1,2).toString();  //holt z.B. '2015' aus '2015 Wöchentlich'
      },
    },
    /*legend: {
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      itemMarginBottom: 5,
      align: "left",
    },*/
    plotOptions: {
      line: {
        marker: {
          symbol: null
        }
      }
    }
  }
}());
