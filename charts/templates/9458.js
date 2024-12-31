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
            .replace("Baugewerbe", "Baugewerbe")
            .replace("Handel, Reparatur", "Handel, Reparatur")
            .replace("Verkehr, Lagerei", "Verkehr, Lagerei")
            .replace("Gastgewerbe", "<br/>Gastgewerbe<br/>")
            .replace("Information, Kommunikation", "Information, <br/>Kommunikation")
            .replace("Finanz-, Versicherungs-DL", "Finanz- und <br/>Versicherungs-DL")
            .replace("Beratung, Planung, Forschung, Immobilien", "Beratung, Planung, <br/>Forschung, Immobilien")
            .replace("Gebäudebetreuung, Sicherheit, sonst. wirtsch. DL", "Gebäudebetreuung, <br/>Sicherheit, sonst. <br/>wirtsch. DL")
            .replace("Personalvermittlung, -überlassung", "Personalvermittlung,<br/>-überlassung")
            .replace("Öffentliche Verwaltung, Sozialversicherungen", "Öffentl. Verwaltung, <br/>Sozialversicherungen")
            .replace("Erziehung, Unterricht", "Erziehung, Unterricht")
            .replace("Kultur, Unterhaltung, pers. DL", "Kultur, Unterhaltung, <br/>pers. DL")
            .replace("Gesundheits-, Sozialwesen", "Gesundheits-, <br/>Sozialwesen")
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
      max: 30000,
      tickInterval: 10000,
      "labels": {
        "format": "{value:,.0f}",
        style: {
          fontSize: "9px",
        }
      }
    },
    "series": [
      { "color": "#A8C3CA" },
      { "color": "#689199" },
      { "color": "#246370" },
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
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
      shared: false
    },
    "chart": {
      "type": "column",
      "inverted": false,
      width: 662,
      height: 208,
      //marginBottom: 120,
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

