(function () {
  return {
    "data": {
      "seriesMapping": [
        {
          x: 0, y: 1 // St.Johann
        },
        {
          x: 0, y: 7
        },
        {
          x: 0, y: 2 // Pestalozzi
        },
        {
          x: 0, y: 7
        },
        {
          x: 0, y: 3 // Kannenfeld
        },
        {
          x: 0, y: 9
        },
        {
          x: 0, y: 4 // Landskron
        },
        {
          x: 0, y: 10
        },
        {
          x: 0, y: 5 // Lysbüchel
        },
        {
          x: 0, y: 11
        },
        {
          x: 0, y: 6 // Friedmatt
        },
        {
          x: 0, y: 12
        },        
      ]
    },
    "chart": {
      "type": "line",
      events: {
        load: function () {
          //set xAxis min in navigator
          this.xAxis[0].update({
            min: 2020
          });

          this.credits.element.onclick = function () { };

          //add and move legend title (get it from series names)
          this.legend.title
            .attr({
              text:
              'St. Johann' // St. Johann
                + ':<br>'
                +'Pestalozzi' // Pestalozzi
                + ':<br>'
                + 'Kannenfeld' // Kannenfeld
                + ':<br>'
                + 'Landskron' // Landskron
                + ':<br>'
                + 'Lysbüchel' // Lysbüchel
                + ':<br>'
                + 'Friedmatt' // holt 'Friedmatt' aus 'Zugezogene Friedmattviertel', danke ChatGPT
                + ':<br>'
            })
            .translate(-65,112); //move -x to the left and +y down
        }
      }
    },
    "yAxis": [{
      gridLineColor: '#B9CFD7',
      gridLineWidth: 0.5,
      "labels": {
        "format": "{value:,.0f}",
        "style": {
          "color": "#000000"
        }
      },
      tickInterval: 250,
       "title": {
        enabled: false
      }
    },
    {
      tickInterval: 10,
      gridLineColor: '#B9CFD7',
      //gridLineWidth: 0.5,
      "title": {
        enabled: false
      },
      "labels": {
        "format": "{value:,.f}%",
        "style": {
          "color": "#000000"
        }
      },
      "min": 0,
      "max": 30,
      "gridLineWidth": 0,
      "opposite": true
    }
    ],
    "xAxis": {
      "tickInterval": 1,
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemMarginBottom": 4,
      x: 110,
      y: -120,
      itemWidth: 80,
      width: 200,
      itemStyle: {
        textOverflow: "none",
        whiteSpace: "nowrap"
      },
        labelFormatter: function () {
        return this.name.split(" ").slice(0, 1).toString();  //holt z.B. 'Freiraumfäche' aus 'Freiraumfäche Friedmatt'
      },
      title: {
        text: '-<br><br><br><br><br>-', //pro <br> in chart.events.load ein <br> hier als Platzhalter, sonst springt die Legende beim anklicken
        style: {
          fontWeight: 'normal',
          lineHeight: 18
        }
      },
    },
    "series": [
      {
        //"color": "#D7E8D2",
        "color": "#3c3c3c", // St. Johann
        "index": 0,
        "type": "column",
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .0f}</b><br/>' }
      },
      {
        "color": "#3c3c3c", //rgb(0,122,47)
        dashStyle: 'shortDash',
        "index": 1,
        "yAxis": 1,
        "marker": {
          "enabled": false,
          "symbol": "circle",
        },
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>' }
      },
      {
        //"color": "#E7CEE2",
        "color": "#9E7C59",
        "index": 2,
        "type": "column",
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .0f}</b><br/>' }
      },
      {
        "color": "#9E7C59", //rgb(146,63,141)
        "index": 3,
        "yAxis": 1,
        "marker": {
          "enabled": false,
          "symbol": "circle",
        },
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>' }
      },
      {
        //"color": "#D7E8D2",
        visible: false,
        "color": "#FF8028",
        "index": 4,
        "type": "column",
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .0f}</b><br/>' }
      },
      {
        visible: false,
        "color": "#FF8028", //rgb(0,122,47)
        "index": 5,
        "yAxis": 1,
        "marker": {
          "enabled": false,
          "symbol": "circle",
        },
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>' }
      },
      {
        //"color": "#E7CEE2",
        "color": "#923F8D",
        "index": 6,
        "type": "column",
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .0f}</b><br/>' }
      },
      {
        "color": "#923F8D", //rgb(146,63,141)
        "index": 7,
        "yAxis": 1,
        "marker": {
          "enabled": false,
          "symbol": "circle",
        },
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>' }
      },
      {
        //"color": "#D7E8D2",
        "color": "#689199",
        "index": 8,
        "type": "column",
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .0f}</b><br/>' }
      },
      {
        "color": "#689199", //rgb(0,122,47)
        "index": 9,
        "yAxis": 1,
        "marker": {
          "enabled": false,
          "symbol": "circle",
        },
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>' }
      },
      {
        //"color": "#E7CEE2",
        "color": "#FABD24",
        "index": 10,
        "type": "column",
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .0f}</b><br/>' }
      },      
      {
        "color": "#FABD24", //rgb(146,63,141)
        "index": 11,
        "yAxis": 1,
        "marker": {
          "enabled": false,
          "symbol": "circle",
        },
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>' 
      }
      }
    ],
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
        pointRange: null
      },
      xAxis: {
        max: 2023.1,
        // tickInterval: 1,
        tickPositioner: function () {
          var interval = 1,
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
  };
}());
