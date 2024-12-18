(function () {
  return {
    chart: {
      marginRight: 20,
      events: {
        load: function () {
          //add and move legend title (get it from series names)
          this.legend.title
            .attr({
              text:
                this.series[0].name.split(": ").slice(0, 1).toString()
                + ':<br>'
                + this.series[4].name.split(": ").slice(0, 1).toString()
                + ':'
            })
            .translate(-70, 42); //move -140 to the left and 8 down
        }
      }
    },
    "plotOptions": {
      "line": {
        "connectNulls": true,
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    },
    "xAxis": {
      tickInterval: 1
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}%"
      }
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      width: 300,
      x: 105,
      y: -40,
      title: {
        text: '-<br>-', //pro <br> in chart.events.load ein <br> hier als Platzhalter, sonst springt die Legende beim anklicken
        style: {
          fontWeight: 'normal',
          lineHeight: 19
        }
      },
      labelFormatter: function () {
        return this.name.split(": ").pop();  //holt z.B. '2015' aus '2015 Wöchentlich'
      },
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>'
    },
    "series": [
      {
        "color": "#b00000", legendIndex: 1
      },
      {
        "color": "#008ac3", legendIndex: 2
      },
      {
        "color": "#000", legendIndex: 3
      },
      {
        "color": "#b00000", dashStyle: 'shortDash', legendIndex: 4
      },
      {
        "color": "#008ac3", dashStyle: 'shortDash', legendIndex: 5
      },
      {
        "color": "#000", dashStyle: 'shortDash', legendIndex: 6
      }
    ],

  }
}());
