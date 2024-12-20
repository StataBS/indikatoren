(function () {
  return {
    plotOptions: {
      // Schatten-Effekt deaktivieren
      pie: {
        shadow: false,
        states: {
          hover: {
            halo: {
              size: 0
            }
          }
        }
      },
      series: {
        allowPointSelect: false,
        point: {
          events: {
            legendItemClick: function (event) {
              event.preventDefault();
            }
          }
        }
      },
    },
    legend: {
      itemWidth: 75,
      itemStyle: {
        textOverflow: "none",
        whiteSpace: "nowrap"
      },
      enabled: true,
      layout: "vertical",
      verticalAlign: "middle",
      align: "right",
      itemDistance: 10,
      style: {
        fontSize: "12px"
      },
      labelFormatter: function () {
        if (this.index === 0) {
          return 'Basispaket';
        } else {
          return this.name;
        }
      }
    },
    series: [{
      data: {
        series: [
          {
            ParentId: '1',
          },
          {
            ParentId: '2',
          }
        ]
      },
      dataLabels: {
        enabled: true,
        formatter: function () {
          // Überprüft, ob "Donutstück" grösser als 5% ist und wenn nicht, soll Prozentwert nicht angezeigt werden
          return Math.abs(this.y) > (0.04 * Math.abs(this.total)) ? Highcharts.numberFormat(this.percentage, 1) + '%' : null;
        },
        distance: -25,
        style: {
          color: 'black',
          textOutline: "0px black",
          fontWeight: "normal",
          fontSize: "12px"
        }
      },
      showInLegend: false,
      type: 'pie',
      size: '69%',
      innerSize: '50%',
      center: [180, 120],
      borderWidth: 2,
      colors: [
        "#fcca9a",  //1. Farbe Innen
        "#ffdfa1",  //2. Farbe Innen
        "#eda78f",  //3. Farbe Innen
        '#facad5',  //4. Farbe Innen
        '#f1d098',  //5. Farbe Innen
        '#bb93a7'   //6. Farbe Innen
      ],
    }, {
      data: {
        series: [
          {
            id: '1',
          },
          {
            id: '2',
          }
        ]
      },
      dataLabels: {
        enabled: true,
        format: '{point.percentage:.1f}%',
        distance: -20,
        style: {
          color: 'contrast',
          textOutline: "0px black",
          fontWeight: "normal",
          fontSize: "12px"
        }
      },
      showInLegend: true,
      type: 'pie',
      innerSize: '70%',
      center: [180, 120],
      borderWidth: 2,
      colors: [
        "#ed802f",  //1. Farbe Aussen
        "#f9b11e",  //2. Farbe Aussen
        "#d2353b",  //3. Farbe Aussen
        '#ef7d9c',  //4. Farbe Aussen
        '#d19224',  //5. Farbe Aussen
        '#7a3050'   //6. Farbe Aussen
      ],
    }],
    tooltip: {
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f} </b> ({point.percentage:.1f}%)<br/><br/>',
      shared: true,
      useHTML: false
    },
    labels: {
      items: [{
        html: 'Aussen: Anteil Fälle<br/>Innen: &nbsp;&nbsp;&nbsp;Anteil Case-Mix',
        style: {
          left: '300px',
          top: '250px'
        }
      }]
    },
  };
}());
