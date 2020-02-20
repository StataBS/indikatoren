(function () {
  return {
    "chart": {
      "type": "line",
      marginRight: 27,
      marginTop: 40,
      events: {
        load: function () {
          //move legend title
          var title = this.legend.title.translate(-165, 25);
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
          "format": "{value:,.2f}",
          x: -5,
          y: 3,
          "style": {
            "color": "#000000",
            fontSize: '10px'
          }
        },
        "min": 0,
      },
      {
        gridLineColor: '#B9CFD7',
        gridLineWidth: 0.5,
        tickAmount: 5,
        "title": {
          enabled: false
        },
        "labels": {
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
      "tickInterval": 1
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      alignColumns: false,
      useHTML: true,
      y: -30,
      x: 20,
      itemMarginBottom: 2,
      align: "right",
      width: 160,
      //itemWidth: 80,
      labelFormatter: function () {
        return this.name.split(" ").slice(-1).toString().replace('Kleinhüningen','Kleinh.'); //return only last word of legend-title
      },
      title: {
        text: ' <br>Personenwagen pro Haushalt:<br/>Motorisierungsgrad (rechte Skala):',
        style: {
          fontWeight: 'normal',
          fontSize: '10px',
          //lineHeight: 1.7
        }
      }
    },
    /*    "data": {
          "seriesMapping": [
            {y: 1},
            {y: 2},
            {y: 3},
            {y: 4},
          ]
        },*/
    "series": [
      {
        "color": "#cd9c00",
        "index": 0,
        //legendIndex: 0,
        "type": "column",
        // tooltip: {"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>'}
      },
      {
        "color": "#7f5f1a",
        "index": 2,
        //legendIndex: 1,
        "type": "line",
        "yAxis": 1,
        // tooltip: {"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>'}
      },
      {
        "color": "#b375ab",
        "index": 1,
        //legendIndex: 2,
        "type": "column",
        //tooltip: {"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>'}
      },
      {
        "color": "#923f8d",
        "index": 3,
        //legendIndex: 3,
        "type": "line",
        "yAxis": 1,
        //tooltip: {"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>'}
      }
    ]
  }
}());