(function () {
  return {
    chart: {
      type: "line",
      events: {
        load: function () {
          //move legend title
          var title = this.legend.title.translate(-140, 40);
        }
      }
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: false
        },
        borderWidth: 0,
      }
    },
    yAxis: [
      {
        gridLineColor: '#B9CFD7',
        gridLineWidth: 0.5,
        title: {
          enabled: false
        },
        labels: {
          format: "{value:,.0f}",
          style: {
            color: "#000000"
          }
        },
        min: 0
      },
      {
        gridLineColor: '#B9CFD7',
        gridLineWidth: 0.5,
        title: {
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
      "tickInterval": 2
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      //"itemMarginBottom": 5,
      useHTML: true,
      y: -55,
      x: -17,
      itemMarginBottom: 2,
      align: "right",
      width: 260,
      //itemWidth: 80,
      labelFormatter: function () {
        return this.name.split(" ").slice(1,2).toString(); //return only last word of legend-title
        //return tmp.replace('Kleinhüningen','Kleinh.');
      },
      title: {
        text: ' <br>Bezüger:<br/>Quote (rechte Skala):',
        style: {
          fontWeight: 'normal',
          fontSize: '12px',
          lineHeight: 1.4
        }
      }

    },
    "series": [
      {
        //"color": "#D7E8D2",
        "color": "#cd9c00",
        "index": 0,
        "type": "column",
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .0f}</b><br/>' }
      },
      {
        //"color": "#E7CEE2",
        "color": "#b375ab",
        "index": 1,
        "type": "column",
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .0f}</b><br/>' }
      },
      {
        "color": "#7f5f1a", //rgb(0,122,47)
        "index": 2,
        "yAxis": 1,
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>' }
      },
      {
        "color": "#923f8d", //rgb(146,63,141)
        "index": 3,
        "yAxis": 1,
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>' }
      },
      {
        "color": "#999999",
        "index": 4,
        "yAxis": 1,
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>' }
      }
    ],
  }
}());
