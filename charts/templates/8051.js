(function () {
  return {
    "chart": {
      //"marginBottom": 75,
      //"marginTop": 75,
      "type": "column"
    },
    "plotOptions": {
      "series": {
        stacking: "normal",
        borderWidth: 0,
        groupPadding: 0,
      }
    },
    xAxis: {
      type: "category",
      tickInterval: 1,
      labels: {
        step: 1,
        rotation: -45,
        style: {
          fontSize: "11px"
        },
        formatter: function () {
          return this.value.replace('Kleinhüningen', 'Kleinh.');
        }
      }
    },
    "yAxis": {
      tickInterval: 500,
      "labels": {
        "format": "{value:,.0f}"
      },
    },
    "legend": {
      "enabled": true,
      reversed: true,
      "layout": "vertical",
      "verticalAlign": "middle",
      "align": "right",
      itemMarginBottom: 5
    },
    "series": [
      { "color": "#672773", index: 9, legendIndex: 0 }, /*Deutschland*/
      { "color": "#007a2f", index: 8, legendIndex: 1 }, /*Italien*/
      { "color": "#fabd24", index: 7, legendIndex: 2 }, /*Türkei*/
      { "color": "#b475ab", index: 6, legendIndex: 3 }, /*EU-17 & EFTA*/
      { "color": "#71a3b5", index: 5, legendIndex: 4 }, /*EU-Ost */
      { "color": "#b9cfd7", index: 4, legendIndex: 5 }, /*Balkan*/
      { "color": "#ff8028", index: 3, legendIndex: 6 }, /*Mittel- & Südamerika */
      { "color": "#73ba7c", index: 2, legendIndex: 7 }, /*Arabische Länder */
      { "color": "#9f7c5a", index: 1, legendIndex: 8 }, /*Afrikanische Länder*/
      { "color": "#999999", index: 0, legendIndex: 9 }, /*Übrige Länder*/
    ],
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
      "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
      "shared": true
    },
    tooltip: {
      shared: true,
      useHTML: true,
      followPointer: true,
      headerFormat: "<table>",
      pointFormat: '<tr><td><span style="color:{series.color}">\u25CF</span> {series.name}:</td>'
        + '<td style="text-align:right">&nbsp;<b>{point.y}</b></td>'
        + '<td style="text-align:right">&nbsp;({point.percentage:,.1f}%)</td></tr>',
      footerFormat: '<tr><td>Total: </td><td><b>{point.total:,.0f}</b></td><td></td></tr></table>',
    },
  }
}());
