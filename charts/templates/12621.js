(function () {
  return {
    "xAxis": {
      tickInterval: 1
    },
    "yAxis": {
      tickInterval: 20000,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      pointFormatter: function () {
        return '<span style="color:' + this.series.color + '">\u25CF</span> '
          + this.series.name.replace('Friedmattviertel', 'Friedmatt')
          + ': <b>' + Highcharts.numberFormat(this.y, 0) + ' Fr.</b><br/>';
      }
    },
    "series": [
      {
        "color": "#FABD24" /* "#b375ab" Friedmatt*/
      },
      {
        "color": "#FABD24", /* "#b375ab" Friedmatt*/
        dashStyle: "ShortDash",
      },
      {
        "color": "#FF8028" /* "#689199" Kannenfeld*/
      },
      {
        "color": "#FF8028", /* "#689199" Kannenfeld*/
        dashStyle: "ShortDash",
      },
      {
        "color": "#923F8D" /* "#662673" Landskron*/
      },
      {
        "color": "#923F8D", /* "#662673" Landskron*/
        dashStyle: "ShortDash",
      },
      {
        "color": "#689199" /* "#999" Lysbüchel*/
      },
      {
        "color": "#689199", /* "#999" Lysbüchel*/
        dashStyle: "ShortDash",
      },
      {
        "color": "#9E7C59" /*"#cd9c00" Pestalozzi*/
      },
      {
        "color": "#9E7C59", /*"#cd9c00" Pestalozzi*/
        dashStyle: "ShortDash",
      },
    ],
    chart: {
      events: {
        load: function () {
          var chart = this;
          // Extract common words from series names
          var leftTitle = chart.series[0].name.split(" ").slice(0, 1).toString();
          var rightTitle = chart.series[1].name.split(" ").slice(0, 1).toString();

          // Add and move legend titles
          chart.renderer.text(leftTitle + ':', chart.legend.group.translateX + 7, chart.legend.group.translateY + 5)
            // .css({ fontWeight: 'bold' })
            .add();
          chart.renderer.text(rightTitle + ':', chart.legend.group.translateX + 186, chart.legend.group.translateY + 5)
            //.css({ fontWeight: 'bold' })
            .add();
          //}


          /*load: function () {
            //add and move legend title (get it from series names)
            this.legend.title
              .attr({
                text:
                  this.series[0].name.split(" ").slice(0, 1).toString() //holt 'Wöchentlich' aus '2015 Wöchentlich'
                  + ':'
                  + this.series[1].name.split(" ").slice(0, 1).toString() //holt 'Kumuliert' aus '2020 Kumuliert'
                  + ':'
              })
              /*.translate(-140, 8); //move -140 to the left and 8 down*/
          //}

          // rename Friedmatt
          this.series[0].update({
            name: "Mittelwert Friedmatt"
          });
          this.series[1].update({
            name: "Median Friedmatt"
          });
        }
      }
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 3,
      x: 50,
      "align": "left",
      itemWidth: 180,
      itemStyle: {
        width: "50%",
        textOverflow: "none"
      },
      title: {
        text: '<br>', //pro <br> in chart.events.load ein <br> hier als Platzhalter, sonst springt die Legende beim anklicken
        style: {
          fontWeight: 'normal',
          lineHeight: 18
        }
      },
      labelFormatter: function () {
        return this.name.replace('Friedmattviertel', 'Friedmatt').split(" ").slice(-1).toString();  //holt z.B. 'Friedmatt' aus 'Freiraumfäche Friedmatt'
      },
    },
    "plotOptions": {
      "line": {
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    }
  }
}());
