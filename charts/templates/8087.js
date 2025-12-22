(function () {
  return {
    "chart": {
      "type": "line",
      events: {
        load: function () {
          //move legend title
          var title = this.legend.title.translate(-190, 46);
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
          "format": "{value:,.1f}",
          "style": {
            "color": "#000000"
          }
        },
        "min": 0,
        max: 0.8
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
      align: "right",
      alignColumns: true,
      useHTML: true,
      y: -50,
      x: 0,
      itemMarginBottom: 5,
      width: 240,
      itemWidth: 80,
      itemStyle: {
        textOverflow: "none",
        whiteSpace: "nowrap"
      },
      labelFormatter: function () {
        //return (this.index % 2 != 0) ? this.name.slice(-4) : this.name; //remove text before year on each item with odd index
        //return this.name.slice(-4); //return last 4 letters
        return this.name.split(" ").pop().replace('Basel', 'Stadt Basel').replace('Kleinhüningen', 'Kleinh.'); //return only last word of legend-title
      },
      title: {
        text: 'PW pro Haushalt:<br/>Motorisierungsgrad (rechte Skala):',
        style: {
          fontWeight: 'normal',
          lineHeight: 1.7
        }
      }
    },
    tooltip:{
      outside:true,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.2f}</b><br/>'
    },
    "series": [
      {
       //Klybeck
        "color": "#cd9c00",
        "index": 0,
        legendIndex: 0,
        "type": "column",
        //tooltip: {"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>'}
        },
      {
        "color": "#7f5f1a",
        "index": 2,
        legendIndex: 3,
        "type": "line",
        "yAxis": 1,
        //tooltip: {"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>'}
      },
      {
        //Kleinhüningen
        "color": "#b375ab",
        "index": 1,
        legendIndex: 1,
        "type": "column",
        //tooltip: {"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>'}
      },
      {
        "color": "#923f8d",
        "index": 3,
        legendIndex: 4,
        "type": "line",
        "yAxis": 1,
        //tooltip: {"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>'}
      },
      {
        "color": "#8A8A8A",
        "index": 4,
        legendIndex: 2,
        "type": "column",
        //tooltip: {"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>'}
      },
      {
        "color": "#777777",
        "index": 5,
        legendIndex: 5,
        "type": "line",
        "yAxis": 1,
        //tooltip: {"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>'}
      }
    ]
  }
}());
