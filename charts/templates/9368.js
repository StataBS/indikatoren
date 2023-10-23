(function () {
  return {
    "chart": {
      "type": "column",
      marginRight: 150,
      marginLeft: 50
    },
    "plotOptions": {
      "series": {
        borderWidth: 0,
        pointPadding: 0.1,
        groupPadding: 0.1,
        minPointLength: 1,
        //"pointWidth": 30,
        "stacking": "normal"
      }
    },
    "xAxis": {
      "type": "category",
      "tickInterval": 1,
      "labels": {
        rotation: -45
      }
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}",
      },
      "max": undefined
    },
    "legend": {
      layout: "vertical",
      verticalAlign: "middle",
      align: "right",
      width: 130,
      itemMarginBottom: 5,
      itemStyle: {
        textOverflow: null,
      },
      labelFormatter: function () {
        return this.name.replace("Unterhaltungseinrichtungen", "Unterhaltungs-einrichtungen")
      }
    },
    "tooltip": {
      shared: true,
      useHTML: true,
      followPointer: true,
      headerFormat: "<table>",
      pointFormat: '<tr><td><span style="color:{series.color}">\u25CF</span> {series.name}:</td>'
        + '<td style="text-align:right">&nbsp;<b>{point.y}</b></td>'
        + '<td style="text-align:right">&nbsp;({point.percentage:,.1f}%)</td></tr>',
      footerFormat: '<tr><td>Total: </td><td><b>{point.total:,.0f}</b></td><td></td></tr></table>',
    },
    "series": [
      { "color": "#007A2F" },
      { "color": "#68AB2B" },
      { "color": "#D7E8D2" },
      { "color": "#2B0099" },
      { "color": "#008AC3" },
      { "color": "#689199" },
      { "color": "#D3E2E4" },
    ]
  }
}());
