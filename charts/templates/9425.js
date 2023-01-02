(function () {
  return {
    "chart": {
      "type": "column",
      marginRight: 110,
    },
    "plotOptions": {
      "series": {
        borderWidth: 0,
        pointPadding: 0.1,
        groupPadding: 0.1,
        "stacking": "normal"
      }
    },
    "xAxis": {
      "type": "category",
      "tickInterval": 1,
      "labels": {
        rotation: -45,
        step: 1
      }
    },
    "yAxis": {
      tickAmount: 5,
      "labels": {
        "format": "{value:,.0f}",
      },
      "max": undefined
    },
    "legend": {
      y: 5,
      layout: "vertical",
      verticalAlign: "top",
      align: "right",
      padding: 0,
      width: 105,
      symbolPadding: 2,
      //itemMarginBottom: 5,
      itemStyle: {
        textOverflow: null,
      },
      labelFormatter: function () {
        return this.name.replace("Unterhaltungseinrichtungen", "Unterhal-tungseinrichtungen").replace("Historische", "Hist.").replace("Bibliotheken und Archive", "Bibliotheken, Archive")
        .replace("Botanische", "Bot.")
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
