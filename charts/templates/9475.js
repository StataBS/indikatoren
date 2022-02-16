(function () {
    return {
      yAxis: {
        tickAmount: 7,
        showLastLabel: true,
        endOnTick: true,

        labels: {
          format: "{value:,.0f}",
        },
        opposite: false,
      },
      xAxis: {
        endOnTick: true,
        startOnTick: true,
        showFirstLabel: true,
        showLastLabel: true,
        tickInterval: 365 * 24 * 3600 * 1000,
        minTickInterval: 365 * 24 * 3600 * 1000,
        ordinal: false,
      },
      tooltip: {
        enabled: true,
        shared: true,
        split: false,
        borderColor: "#000000",
        xDateFormat: "%Y",
        pointFormat:
          '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
      },

      series: [
        {
          color: "#000000",
          showInNavigator: true,
          marker: {
            symbol: "circle",
            enabled: false,
          },
        },
        {
          color: "#2b0099",
          visible: true,
          showInNavigator: true,
          marker: {
            symbol: "circle",
            enabled: false,
          },
        },
        {
          color: "#ff8028",
          visible: true,
          showInNavigator: true,
          marker: {
            symbol: "circle",
            enabled: false,
          },
        },
        {
          color: "#2B0099",
          visible: false,
          showInNavigator: true,
          dashStyle: "Dash",
          lineWidth: 1,
          marker: {
            symbol: "circle",
            enabled: false,
          },
        },
        {
          color: "#2B0099",
          visible: false,
          showInNavigator: true,
          lineWidth: 1,
          marker: {
            symbol: "circle",
            enabled: false,
          },
        },
        {
          color: "#ff8028",
          visible: false,
          showInNavigator: true,
          dashStyle: "Dash",
          lineWidth: 1,
          marker: {
            symbol: "circle",
            enabled: false,
          },
        },
        {
          color: "#ff8028",
          visible: false,
          showInNavigator: true,
          lineWidth: 1,
          marker: {
            symbol: "circle",
            enabled: false,
          },
        },
      ],
      legend: {
        enabled: true,
        //"x": 50,
        //"y": 25,
        //"itemWidth": 150,
        layout: "horizontal",
        verticalAlign: "top",
        itemMarginBottom: 5,
        align: "left",
        itemStyle: {
          fontWeight: "normal",
        },
      },

      data: {
        //convert year in first column to UTC date to be used by Highstock
        parsed: function (columns) {
          columns[0].forEach(function (v, i, a) {
            columns[0][i] = Date.UTC(columns[0][i]);
          });
        },
      },

      rangeSelector: {
        buttons: [
          {
            count: 10,
            type: "year",
            text: "10 J",
          },
          {
            count: 20,
            type: "year",
            text: "20 J",
          },
          {
            count: 50,
            type: "year",
            text: "50 J",
          },
          {
            count: 100,
            type: "year",
            text: "100 J",
          },
          {
            type: "all",
            text: "Alle J",
          },
        ],
        buttonSpacing: 15,
        inputEnabled: false,
        selected: 4,
        inputDateFormat: "%Y",
        inputEditDateFormat: "%Y",
      },
      chart: {
        marginRight: 15,
      },
    };
  }());
  
  