(function () {
  return {
    data: {
      parsed: function (columns) {
        //Negate the numbers in the the 2nd column to create the left side of the population pyramid
        var negateNumbersInColumn = function (columnIndex) {
          columns.forEach(function (column, i, c) {
            if (i == columnIndex) {
              column.forEach(function (item, j, v) {
                if (typeof (item) == 'number') {
                  v[j] = -v[j];
                }
              });
            }
          });
        };
        negateNumbersInColumn(2);
        negateNumbersInColumn(4);
        negateNumbersInColumn(6);
        negateNumbersInColumn(8);
        negateNumbersInColumn(10);
      }
    },
    "chart": {
      "type": "column",
      events: {
        load: function () {
          //set xAxis min in navigator
          this.xAxis[0].update({
            min: 2018
          });
          this.credits.element.onclick = function () { };

          //add and move legend title (get it from series names)
          this.legend.title
            .attr({
              text:
                this.series[1].name.split(" ")[1].split("viertel")[0] //holt 'Friedmatt' aus 'Zugezogene Friedmattviertel', danke ChatGPT
                + ':<br>'
                + this.series[3].name.split(" ").slice(-1).toString() //Kannenfeld
                + ':<br>'
                + this.series[5].name.split(" ").slice(-1).toString() //Landskron
                + ':<br>'
                + this.series[7].name.split(" ").slice(-1).toString() //Lysbüchel
                + ':<br>'
                + this.series[9].name.split(" ").slice(-1).toString() //Pestalozzi
                + ':'
            })
            .translate(-65, 93); //move -x to the left and +y down
        }
      }
    },
    "xAxis": {
      tickInterval: 1
    },
    "yAxis": {
      min: -1900000,
      tickInterval: 250000,
      "labels": {
        "format": "{value:,.0f}"
      },
      plotLines: [{
        value: 0,
        color: '#B6CFD7',
        width: 2,
        zIndex: 0,
      }]
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
        "color": "#CD9C00", /* Friedmatt */
        "stacking": "normal",
        stack: 0,
        legendIndex: 0,
      },
      {
        "color": "#7F5F1A",
        "stacking": "normal",
        stack: 0,
        legendIndex: 1,
      },
      {
        "color": "#DC440E", /*Kannenfeld*/
        "stacking": "normal",
        stack: 1,
        legendIndex: 3,
      },
      {
        "color": "#661200",
        "stacking": "normal",
        stack: 1,
        legendIndex: 4,
      },
      {
        "color": "#B375AB", /*Landskron*/
        "stacking": "normal",
        stack: 2,
        legendIndex: 6,
      },
      {
        "color": "#662673",
        "stacking": "normal",
        stack: 2,
        legendIndex: 7,
      },
      {
        "color": "#A8C3CA", /*Lysbüchel*/
        "stacking": "normal",
        stack: 3,
        legendIndex: 9,
      },
      {
        "color": "#246370",
        "stacking": "normal",
        stack: 3,
        legendIndex: 10,
      },
      {
        "color": "#C4AB91", /*Pestalozzi*/
        "stacking": "normal",
        stack: 4,
        legendIndex: 12,
      },
      {
        "color": "#67401E",
        "stacking": "normal",
        stack: 4,
        legendIndex: 13,
      },
      {
        "color": "#fabd24", /*Friedmatt*/
        type: "line",
        lineWidth: 0,
        legendIndex: 2,
        marker: {
          symbol: 'diamond',
          radius: 5
        },
        pointPlacement: -0.235, // Shift slightly left
        zIndex: 5,
        states: {
          hover: {
            lineWidth: 2
          }
        }
      },
      {
        "color": "#FF8028", /* Kannenfeld */
        type: "line",
        lineWidth: 0,
        legendIndex: 5,
        marker: {
          symbol: 'diamond',
          radius: 5
        },
        pointPlacement: -0.11, // Shift slightly left
        zIndex: 4,
        tooltip: {
          shared: true
        },
        states: {
          hover: {
            lineWidth: 2
          }
        }
      },
      {
        "color": "#923F8D", /*Landskron */
        type: "line",
        lineWidth: 0,
        legendIndex: 8,
        marker: {
          symbol: 'diamond',
          radius: 5
        },
        pointPlacement: 0.005, // Shift slightly 
        zIndex: 3,
        tooltip: {
          shared: true
        },
        states: {
          hover: {
            lineWidth: 2
          }
        }
      },
      {
        "color": "#689199", /* Lysbüchel*/
        type: "line",
        lineWidth: 0,
        legendIndex: 11,
        marker: {
          symbol: 'diamond',
          radius: 5
        },
        pointPlacement: 0.12, // Shift slightly right
        zIndex: 2,
        tooltip: {
          shared: true
        },
        states: {
          hover: {
            lineWidth: 2
          }
        }
      },
      {
        "color": "#9E7C59", /* Pestalozzi*/
        type: "line",
        lineWidth: 0,
        legendIndex: 14,
        marker: {
          symbol: 'diamond',
          radius: 5
        },
        pointPlacement: 0.25, // Shift slightly right
        zIndex: 1,
        tooltip: {
          shared: true
        },
        states: {
          hover: {
            lineWidth: 2
          }
        }
      }
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      x: 130,
      y: -100,
      itemWidth: 115,
      itemDistance: 3,
      width: 400,
      itemStyle: {
        textOverflow: "none",
        whiteSpace: "nowrap"
      },
      title: {
        text: '-<br><br><br><br>-', //pro <br> in chart.events.load ein <br> hier als Platzhalter, sonst springt die Legende beim anklicken
        style: {
          fontWeight: 'normal',
          lineHeight: 18
        }
      },
      labelFormatter: function () {
        return this.name.replace('Friedmattviertel', 'Friedmatt').split(" ").slice(0, 1).toString();  //holt z.B. 'Freiraumfäche' aus 'Freiraumfäche Friedmatt'
      },
    },
    "plotOptions": {
      series: {
        borderWidth: 0,
        marker: {
          enabled: true
        },
        showInNavigator: true
      }
    },
    subtitle: {
      useHTML: true
    },
    navigator: {
      enabled: true,
      top: 330,
      series: {
        type: 'column',
        stacking: 'normal',
        pointRange: null
      },
      xAxis: {
        max: 2021.1,
        // tickInterval: 1,
        tickPositioner: function () {
          var interval = 2,
            ext = this.getExtremes(),
            i = ext.dataMax,
            pos = [i];
          while (i >= ext.dataMin) pos.unshift(i = i - interval);
          return pos;
        },
        labels: {
          //step: 1,
          rotation: 0,
          align: 'center',
          y: 15,
          x: -3,
          style: {
            color: "#000000"
          },
          /*formatter: function () {
            // get year from chart axis label names
            return this.chart.xAxis[0].names[this.value].slice(0, 4);
          }*/
        },
      }
    },
  }
}());
