(function () {
  return {
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
        //itemWidth: 10,
      },
      column: {
        stacking: 'normal'
      }
    },
    "xAxis": {
      "type": "category",
      "labels": {
        rotation: 0,
        useHTML: true,
        style: {
          whiteSpace: 'normal',
          width: '80px',
          textOverflow: 'none',
          textAlign: 'center'
        }

      }
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "series": [
      { "color": "#ffbb58" },
      { "color": "#e9aef4" },
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
    },
    tooltip: {
      shared: true,
      useHTML: true,
      followPointer: true,
      outside: true,
      headerFormat: "<table>",
      pointFormat: '<tr><td><span style="color:{series.color}">\u25CF</span> {series.name}:&nbsp;</td>'
        + '<td style="text-align:right">&nbsp;<b>{point.y}</b></td>'
        + '<td style="text-align:right">&nbsp;({point.percentage:,.1f}%)</td></tr>',
      footerFormat: '<tr><td><span style="color:transparent">\u25CF</span> Total: </td><td><b>{point.total:,.0f}</b></td></tr></table>',
    },
    "chart": {
      "type": "column",
      "inverted": false,
      marginRight: 30,
      //"spacingTop": 100
    }
  }
}()); 