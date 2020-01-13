(function () {
  return {
    "chart": {
      "type": "line",
      events: {
        load: function () {
          //move legend title
          var title = this.legend.title.translate(-203, 46);
        }
      }
    },
    "plotOptions": {
      "series": {
        borderWidth: 0,
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
          //"format": "{value:,.2f}",
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
          //"format": "{value:,.2f}",
          "style": {
            "color": "#000000"
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
      //"align": "left",
      alignColumns: true,
      //itemWidth: 200
      useHTML: true,
      y: -50,
      x: -20,
      itemMarginBottom: 5,
      align: "right",
      width: 200,
      itemWidth: 80,
      labelFormatter: function () {
        //return (this.index % 2 != 0) ? this.name.slice(-4) : this.name; //remove text before year on each item with odd index
        //return this.name.slice(-4); //return last 4 letters
        return this.name.split(" ").slice(-1); //return only last word of legend-title
      },
      title: {
        text: 'Personenwagen pro Haushalt:<br/>Motorisierungsgrad (rechte Skala):',
        style: {
          fontWeight: 'normal',
          lineHeight: 1.7
        }
      }

    },
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
