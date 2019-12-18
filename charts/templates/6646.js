(function () {
  return {
    legend: {
      style: {
        fontSize: "12px"
      }
    },
    "data": {
      "switchRowsAndColumns": false
    },
    "series": [
      {
        "name": "Anzahl"
      }
    ],
    plotOptions: {
      pie: {
        //size: '65%',
        colors: [
          '#B00000',
          '#FF8028',
          '#FABD24',
          '#E6E600',
          "#8AB77D",
          '#68AB2B',
          '#007A2F',
        ],
        /*
        dataLabels: {
          enabled: true,
          align: 'center',
          format: '{point.percentage:.1f}%',
          distance: 3,
          style: {
            color: 'black',
            textOutline: "0px black",
            fontWeight: "normal",
            fontSize: "9px"
          },
          connectorColor: '#000000',
          connectorWidth: 0.5,
          softConnector: false
          //connectorShape: 'crookedLine', //since 7.0.0
          //crookDistance: '70%'
        },
        connectorAllowed: true
        */
      }
    }
  };
}());
