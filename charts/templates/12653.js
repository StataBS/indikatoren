(function () {
  return {
    "chart": {
      "type": "line",
       events: {
        load: function () {
          //add and move legend title (get it from series names)
          this.legend.title
            .attr({
              text:
                this.series[0].name.split(" ").slice(-1).toString() //holt 'Friedmatt' aus 'Freiraumfäche Friedmatt'
                + ':<br>'
                + this.series[2].name.split(" ").slice(-1).toString() //Kannenfeld
                + ':<br>'
                + this.series[4].name.split(" ").slice(-1).toString() //Landskron
                + ':<br>'
                + this.series[6].name.split(" ").slice(-1).toString() //Lysbüchel
                + ':<br>'
                + this.series[8].name.split(" ").slice(-1).toString() //Pestalozzi
                + ':'
            })
            .translate(-65,90); //move -x to the left and +y down
        }
      }
    },
    "plotOptions": {
      "series": {
        borderWidth: 0,
      },
      column: {
        minPointLength: 3
      }
    },
    subtitle: {
      useHTML: true
    },
    "yAxis": [
      {
        gridLineColor: '#B9CFD7',
        gridLineWidth: 0.5,
        "title": {
          enabled: false
        },
        "labels": {
          useHTML: true,
          "format": "{value:,.0f} m<sup>2</sup>",
          "style": {
            "color": "#000000"
          }
        },
        "min": 0
      },
      {
        gridLineColor: '#B9CFD7',
        gridLineWidth: 0.5,
        "title": {
          enabled: false
        },
        "labels": {
          "format": "{value:,.0f}%",
          "style": {
            "color": "#000000"
          }
        },
        "min": 0,
        "opposite": true
      }
    ],
    "xAxis": {
      type: "category"
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemMarginBottom": 4,
      //itemDistance: 7,
      x: 125,
      y: -100,
      itemWidth: 120,
      width: 260,
      itemStyle: {
        textOverflow: "none",
        whiteSpace: "nowrap"
      },
      title: {
        text: '-<br><br><br><br>-', //pro <br> in chart.events.load ein <br> hier als Platzhalter, sonst springt die Legende beim anklicken
        style: {
          fontWeight: 'normal',
          lineHeight: 17
        }
      },
      labelFormatter: function () {
        console.log(this);
        var txt = this.name.split(" ").slice(0, 1).toString();  //holt z.B. 'Freiraumfäche' aus 'Freiraumfäche Friedmatt'
        if (txt == 'Anteil' && this.index == 1) txt += ' (rechte Skala)';
        return txt;
      },
    },
    "series": [
      {
        "color": "#9E7C59", // Pestalozzi
        //"index": 0,
        //legendIndex: 0,
        "type": "column",
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>' }
      },
      {
        "color": "#9E7C59",
        //"index": 5,
        //legendIndex: 1,
        "type": "line",
        "yAxis": 1,
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>' }
      },
      {
        "color": "#FF8028", /* "#689199" Kannenfeld*/
        visible: false,
        //"index": 1,
        //legendIndex: 2,
        "type": "column",
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>' }
      },
      {
        "color": "#FF8028",
        visible: false,
        //"index": 6,
        //legendIndex: 3,
        "type": "line",
        "yAxis": 1,
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>' }
      },
      {
        "color": "#923F8D", /* "#662673" Landskron*/
        visible: false,
         //"index": 2,
        //legendIndex: 2,
        "type": "column",
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>' }
      },
      {
        "color": "#923F8D",
        visible: false,
         //"index": 7,
        //legendIndex: 3,
        "type": "line",
        "yAxis": 1,
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>' }
      },
      {
        "color": "#689199", /* "#999" Lysbüchel*/
        //"index": 3,
        //legendIndex: 2,
        "type": "column",
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>' }
      },
      {
        "color": "#689199",
        //"index": 8,
        //legendIndex: 3,
        "type": "line",
        "yAxis": 1,
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>' }
      },
      {
        "color": "#FABD24", /* "#b375ab" Friedmatt*/
        //"index": 4,
        //legendIndex: 2,
        "type": "column",
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>' }
      },
      {
        "color": "#FABD24",
        //"index": 9,
        //legendIndex: 3,
        "type": "line",
        "yAxis": 1,
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>' }
      }
    ]
  }
}());
