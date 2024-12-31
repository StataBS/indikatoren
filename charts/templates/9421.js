(function () {
  return {
    plotOptions: {
      series: {
        pointPadding: 0,
        groupPadding: 0.1,
        borderWidth: 0
      }
    },
    "xAxis": {
      "type": "category",
      "labels": {
        rotation: -90,
        y: 7,

        "formatter": function () {
          return this.value
            .replace("Industrie (exkl. Chemie, Pharma)", "Industrie (exkl. <br/>Chemie,\u00A0Pharma)")
            .replace("Chemie, Pharma", "Chemie, Pharma")
            .replace("Baugewerbe", "<br/>Baugewerbe<br/>")
            .replace("Handel, Reparatur", "Handel, Reparatur")
            .replace("Verkehr, Lagerei", "Verkehr, Lagerei")
            .replace("Gastgewerbe", "Gastgewerbe")
            .replace("Information, Kommunikation", "Information, <br/>Kommunikation")
            .replace("Finanz-, Versicherungs-DL", "Finanz- und<br/>Versicherungs-DL")
            .replace("Beratung, Planung, Forschung, Immobilien", "Beratung, Planung, <br/>Forschung, Immobilien")
            .replace("Gebäudebetreuung, Sicherheit, sonst. wirtsch. DL", "Gebäudebetreuung, <br/>Sicherheit, sonst. <br/>wirtsch. DL")
            .replace("Personalvermittlung, -überlassung", "Personalvermittlung,<br/>-überlassung")
            .replace("Öffentliche Verwaltung, Sozialversicherungen", "Öffentl. Verwaltung, <br/>Sozialversicherungen")
            .replace("Erziehung, Unterricht", "Erziehung, Unterricht")
            .replace("Kultur, Unterhaltung, pers. DL", "Kultur, Unterhaltung, <br/>pers. DL")
            .replace("Gesundheits-, Sozialwesen", "Gesundheits-, <br/>Sozialwesen")
            .replace("Total", "Total")
            ;
        },
        style: {
          "textAlign": "center",
          fontSize: "9px",
          //width: "100px",
          //wordWrap: 'break-word',
        }
      },
    },
    "yAxis": {
      tickAmount: 8,
      tickInterval: 0.02,
      "labels": {
        rotation: 0,
        "formatter": function () {
          return Highcharts.numberFormat((this.value * 100), 0) + '%';
        },
        "format": "{value}*100%",
        style: {
          fontSize: "9px",
        }
      }
    },
    "series": [
      { "color": "#FFBB58" },
      { "color": "#FF8028" },
      { "color": "#DC440E" },
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      margin: 8,
      itemDistance: 3,
      "itemStyle": {
        "fontSize": "9px",
        "fontWeight": "normal"
      },
    },
    tooltip: {
      "pointFormatter": function () {
        return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y * 100), 1) + '% </b><br/><b>'
      },
    },
    "chart": {
      "type": "column",
      "inverted": false,
      width: 662,
      height: 208,
      spacingTop: 5,
      spacingBottom: 5,
      events: {
        render: function (args) {
          let chart = this;
          chart.xAxis[0].labelGroup.element.childNodes.forEach(label => {
            if (label.getBBox().height > 9) {
              label.attributes[4].value = label.attributes[4].value - (label.getBBox().height - 9) / 4
            }
          })

        }

      }
    }
  }
}());

