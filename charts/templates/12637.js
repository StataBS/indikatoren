(function () {
  return {
    subtitle: {
      useHTML: true
    },
    "chart": {
      "type": "column",
      events: {
        load: function () {
          //set xAxis min in navigator
          this.xAxis[0].update({
            min: 6
          });

          this.credits.element.onclick = function () { };

          //add and move legend title (get it from series names)
          this.legend.title
            .attr({
              text:
                  this.series[1].name.split(" ").slice(0, 1).toString() //Wohnen
                + ':<br><br>'
                + this.series[7].name.split(" ").slice(0, 1).toString() //Arbeiten
                + ':<br>'
            })
            .translate(-65,55); //move -x to the left and +y down
        }
      }
    },
    "xAxis": {
      type: "category"
      //"tickInterval": 1
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "shared": false,
      useHTML: true,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f} m<sup>2</sup></b><br/>'
    },
    "series": [
      {  //Wohnen Pestalozzi
        "color": "#6B4926",
      },
      { // Wohnen Kannenfeld
        "color": "#CC4D00",
      },
      { // Wohnen Landskron
        "color": "#5F0C5A", //"#B375AB",
      },
      {  //Wohnen Lysbüchel
        "color": "#355E66", //"#B6CFD7",
      },
      {  //Wohnen Friedmatt
        "color": "#C78A00",
      },
      { // Wohnen Basel
        "color": "#575757",
        visible: false
      },
      {
        "color": "transparent",
        visible: true,
        showInLegend: false
      },
      {  //Arbeiten Pestalozzi
        "color": "#D1AF8C",
      },
      { // Arbeiten Kannenfeld
        "color": "#FFB35B",
      },
      {  //Arbeiten Landskron
        "color": "#C572C0",
      },
      { // Arbeiten Lysbüchel
        "color": "#9BC4CC",
      },
      {  //Arbeiten Friedmatt
        "color": "#FFF057",
      },
      { // Arbeiten Basel
        "color": "#BDBDBD",
        visible: false
      },
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 4,
      "align": "left",
      x: 120,
      y: -60,
      //itemWidth: 100,
      //itemDistance: 4,
      //width: 300,
      itemStyle: {
        textOverflow: "none",
        whiteSpace: "nowrap"
      },
      title: {
        text: '-<br><br>-', //pro <br> in chart.events.load ein <br> hier als Platzhalter, sonst springt die Legende beim anklicken
        style: {
          fontWeight: 'normal',
          lineHeight: 17
        }
      },
      labelFormatter: function () {
        return this.name.split(" ").slice(-1).toString();  //holt z.B. 'Freiraumfäche' aus 'Freiraumfäche Friedmatt'
      },
    },
    "plotOptions": {
      "series": {
        pointPadding: 0,
        groupPadding: 0.15,
        borderWidth: 0,
        showInNavigator: true
      },
        },
    navigator: {
      enabled: true,
      top: 330,
      series: {
        type: 'column',
        pointRange: null
      },
      xAxis: {
        //max: "2022",
         tickInterval: 1,
       /* tickPositioner: function () {
          //use only every nth tick, starting with startingPoint
          const startingPoint = 1,
            step = 2,
            positions = [];
          for (let i = startingPoint; i < this.max; i += step) {
            positions.push(i)
          }
          return positions
        },*/
        labels: {
          step: 1,
          rotation: 0,
          align: 'center',
          y: 15,
          style: {
            color: "#000000"
          },
          formatter: function () {
            // get year from chart axis label names
            return this.chart.xAxis[0].names[this.value].slice(0, 4);
          }
        },
      }
    },
  }
}());