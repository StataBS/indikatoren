(function () {
  return {
    chart: {
      type: "line",
      marginRight: 29,
      marginTop: 50,
      events: {
        load: function () {
          //move legend title
          var title = this.legend.title.translate(-105, 25);
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
        lineColor: '#B9CFD7',
        tickAmount: 4,
        title: {
          enabled: false
        },
        labels: {
          x: -8,
          y: 3,
          format: "{value:,.0f}",
          style: {
            color: "#000000",
            fontSize: '10px'
          }
        }
      },
      {
        gridLineColor: '#B9CFD7',
        gridLineWidth: 0.5,
        tickAmount: 4,
        title: {
          enabled: false
        },
        "labels": {
          x: 8,
          y: 3,
          "format": "{value:,.0f}%",
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
      alignColumns: false,
      useHTML: true,
      y: -25,
      x: -17,
      itemMarginBottom: 2,
      align: "right",
      width: 160,
      //itemWidth: 80,
      labelFormatter: function () {
        var tmp = this.name.split(" ").slice(1,2).toString(); //return only last word of legend-title
        return tmp.replace('Kleinhüningen','Kleinh.');
      },
      title: {
        text: ' <br>Bezüger:<br/>Quote (rechte Skala):',
        style: {
          fontWeight: 'normal',
          fontSize: '10px',
          //lineHeight: 1.7
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
}());/*
(function () {
  return {
    chart: {
      type: "line"
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
      "itemMarginBottom": 5
    },
    "series": [
      {
        //"color": "#D7E8D2",
        "color": "#cd9c00",
        "index": 1,
        "type": "column",
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .0f}</b><br/>' }
      },
      {
        //"color": "#E7CEE2",
        "color": "#b375ab",
        "index": 0,
        "type": "column",
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .0f}</b><br/>' }
      },
      {
        "color": "#7f5f1a", //rgb(0,122,47)
        "index": 3,
        "yAxis": 1,
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>' }
      },
      {
        "color": "#923f8d", //rgb(146,63,141)
        "index": 2,
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
*/