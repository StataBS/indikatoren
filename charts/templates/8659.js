(function () {
  return {
    exporting: {
      enabled: true
    },

    "chart": {
      "type": "line",
      marginRight: 30,
      marginTop: 40,
      events: {
        load: function () {
          //move legend title
          var title = this.legend.title.translate(-103, 25);
        }
      }
    },
    "plotOptions": {
      "series": {
        borderWidth: 0,
      }
    },
    "yAxis": [
      {
        gridLineColor: '#B9CFD7',
        gridLineWidth: 0.5,
        tickAmount: 5,
        "title": {
          enabled: false
        },
        "labels": {
          useHTML: true,
          "format": "{value:,.0f} m<sup>2</sup>",
          y: 3,
          x: -5,
          "style": {
            "color": "#000000",
            fontSize: '10px'
          }
        },
        "min": 0
      },
      {
        gridLineColor: '#B9CFD7',
        gridLineWidth: 0.5,
        tickAmount: 5,
        "title": {
          enabled: false
        },
        "labels": {
          "format": "{value:,.0f}%",
          y: 3,
          x: 5,
          "style": {
            "color": "#000000",
            fontSize: '10px'
          }

        },
        "min": 0,
        "opposite": true
      }
    ],
    "xAxis": {
      "tickInterval": 2
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      itemMarginBottom: 2,
      alignColumns: false,
      useHTML: true,
      y: -30,
      x: -4,
      align: "right",
      width: 160,
      //itemWidth: 80,
      labelFormatter: function () {
        //var tmp = this.name.split(" ").slice(1, 2).toString(); //return only last word of legend-title
        return this.name.replace('Kleinhüningen', 'Kleinh.').replace(' (rechte Skala)', '').replace('Freiraumfläche','').replace('Anteil ', '');
      },
      title: {
        text: ' <br>Fläche:<br/>Anteil (rechte Skala):',
        style: {
          fontWeight: 'normal',
          fontSize: '10px',
          //textAlign: 'right',
          //lineHeight: 1.5
        }
      }

    },
    "series": [
      {
        "color": "#cd9c00",
        "index": 0,
        //legendIndex: 0,
        "type": "column",
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>' }
      },
      {
        "color": "#7f5f1a",
        "index": 2,
        //legendIndex: 1,
        "type": "line",
        "yAxis": 1,
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>' }
      },
      {
        "color": "#b375ab",
        "index": 1,
        //legendIndex: 2,
        "type": "column",
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>' }
      },
      {
        "color": "#923f8d",
        "index": 3,
        //legendIndex: 3,
        "type": "line",
        "yAxis": 1,
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>' }
      }
    ]
  }
}());